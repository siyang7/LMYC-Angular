import { IReservation } from './../models/reservation';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { Component, OnInit, ViewChild, Inject, ViewEncapsulation } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  calendarOptions: Options;
  displayEvent: any;
  reservations: IReservation[];
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(protected reservationService: ReservationService,
              public dialog: MatDialog,
              ) { }

  ngOnInit() {
    this.getReservations(); 
  }

  getReservations(){
    this.reservationService
      .getReservations()
      .subscribe(
        reservations => this.reservations = reservations,
        error => alert("error: " + error),
        () => {
          this.calendarOptions = {
            editable: true,
            eventLimit: false,
            header: {
              left: 'prev,next today',
              center: 'title',
              right: 'month,agendaWeek,agendaDay,listMonth'
            },
            events: this.getReservationsToDisplay()
          };
        }
      );
  }

  //get all the reservations from local array and return an array of booking for display
  getReservationsToDisplay(){
    const dateObj = new Date();
    const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
    let data: any = [];

    for(let r of this.reservations){
      data.push({
        BoatName: r.boatName,
        title: r.boatName,
        start: r.startDateTime,
        end: r.endDateTime,
        itinerary: r.itinerary,
        createdBy: r.firstName + r.lastName
      })
    }
    return data;
  }

  //display the detail of that event got clicked
  eventClick(model: any) {
    let dialogRef = this.dialog.open(BookingDetailDialogComponent, {
      width: '250px',
      data: { BoatName: model.event.BoatName,
              FromDate: model.event.start.format(),
              EndDate: model.event.start.format(),
              Itinerary: model.event.itinerary,
              CreatedBy: model.event.createdBy,
             }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  //create a new event when user click on a date
  dayClick(model: any) {
    var date = new Date(model.startDate);
    let dialogRef = this.dialog.open(newBookingDialogComponent, {
      width: '250px',
      data: {
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  select(startDate: any, endDate : any) {
    alert('selected ' + startDate.format() + ' to ' + endDate.format());
  }
  clickButton(model: any){}

  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }

}

@Component({
  selector: 'app-booking-detail-dialog',
  templateUrl: 'bookingDetailDialog.component.html',
})
export class BookingDetailDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<BookingDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-new-booking-dialog',
  templateUrl: 'newBookingDialog.component.html',
  styleUrls: ['newBookingDialog.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class newBookingDialogComponent {
  minDate = new Date();
  hour = [];
  constructor(
    public dialogRef: MatDialogRef<newBookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    for(let i = 0 ; i < 25; i++){
      this.hour.push(i.toString())
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
