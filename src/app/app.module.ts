import { FleetService } from './services/fleet.service';
import { ReservationService } from './services/reservation.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { HttpModule } from '@angular/http';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FleetComponent } from './fleet/fleet.component';
import { FaqComponent } from './faq/faq.component';
import { MembershipComponent } from './membership/membership.component';
import { RulesComponent } from './rules/rules.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FullCalendarModule } from './../../node_modules/ng-fullcalendar'
import { DynamicFormComponent } from './components/dynamic-form-group/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';
import { SignupComponent } from './auth/signup/signup.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { ReservationComponent, BookingDetailDialogComponent, newBookingDialogComponent } from './reservation/reservation.component';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatSelect, MatSelectModule, } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MembersTableComponent } from './membersPage/members-table/members-table.component';
import { HttpClientModule } from '@angular/common/http';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		FleetComponent,
		FaqComponent,
		AboutComponent,
		MembershipComponent,
		RulesComponent,
		ContactComponent,
		LoginComponent,
		SignupComponent,
		NavbarComponent,
		DynamicFormComponent,
		DynamicFormQuestionComponent,
		VolunteerComponent,
		ReservationComponent,
		BookingDetailDialogComponent,
		newBookingDialogComponent,
		MembersTableComponent,
	],
	entryComponents: [BookingDetailDialogComponent,
		newBookingDialogComponent,],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,                               // <========== Add this line!
		ReactiveFormsModule,                        // <========== Add this line!
		HttpModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		FullCalendarModule,
		MatDialogModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		HttpClientModule,
		MatNativeDateModule,
		MatSelectModule,
		OwlDateTimeModule,
		OwlNativeDateTimeModule,

	],
	providers: [
		AuthService,
		FleetService,
		ReservationService

	],
	bootstrap: [AppComponent]

})
export class AppModule { }
