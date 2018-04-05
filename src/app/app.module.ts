import { FleetService } from './fleet/fleet.service';
import { AuthService } from './auth/auth.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FleetComponent } from './fleet/fleet.component';
import { FaqComponent } from './faq/faq.component';
import { MembershipComponent } from './membership/membership.component';
import { RulesComponent } from './rules/rules.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';

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
		DynamicFormQuestionComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpModule,
		ReactiveFormsModule
	],
	providers: [
		AuthService,
		FleetService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
