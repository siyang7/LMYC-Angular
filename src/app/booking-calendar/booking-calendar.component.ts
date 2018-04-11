import { CalendarComponent } from 'ng-fullcalendar';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Options } from 'fullcalendar';

@Component({
	selector: 'app-booking-calendar',
	templateUrl: './booking-calendar.component.html',
	styleUrls: ['./booking-calendar.component.css']
})
export class BookingCalendarComponent implements OnInit {
	calendarOptions: Options;
	displayEvent: any;
	@ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
	constructor() { }

	ngOnInit() {
		this.calendarOptions = {
			editable: true,
			eventLimit: false,
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay,listMonth'
			}
		};
	}
	clickButton(model: any) {
		this.displayEvent = model;
	}
	eventClick(model: any) {
		model = {
			event: {
				id: model.event.id,
				start: model.event.start,
				end: model.event.end,
				title: model.event.title,
				allDay: model.event.allDay
				// other params
			},
			duration: {}
		}
		this.displayEvent = model;
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
