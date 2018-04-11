import { IReservation } from './../models/reservation';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ReservationService } from '../services/reservation.service';

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
    this.reservationService.getReservation().subscribe(data => {
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        selectable: true,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: data
      };
    })
  }

  getReservations(){
    this.reservationService.getReservations()
      .then(reservations => this.reservations = reservations);
  }

  displayReservations(){
    const dateObj = new Date();
    const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
    let data: any = [];
    
    for(let reservation of this.reservations){
      let StartDate = reservation.StartDateTime;
      let EndDate = reservation.EndDateTime;
      let StartDay = StartDate.getDay();
      let StartMonth = StartDate.getMonth();
      let StartYear = StartDate.getFullYear();
    }
  }
  
  clickButton(model: any) {
    this.displayEvent = model;
  }
  eventClick(model: any) {
    var date = new Date(model.startDate);
    let dialogRef = this.dialog.open(BookingDetailDialogComponent, {
      width: '250px',
      data: { BoatName: "done",
              FromDate: "fromdate",
              EndDate: "enddate",
              Itinerary: "Itinerary",
              CreatedBy: "CreateBy",
             }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  dayClick(model: any) {
    var date = new Date(model.date);
    alert("dayClicked! Day:" + date.getDay() + " Month " + date.getMonth() + "-------" + model.date.format() );
  }

  select(startDate: any, endDate : any) {
    alert('selected ' + startDate.format() + ' to ' + endDate.format());
  }

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
  templateUrl: 'bookingDetailDialog.components.html',
})
export class BookingDetailDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<BookingDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
