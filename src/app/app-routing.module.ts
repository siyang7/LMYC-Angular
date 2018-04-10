import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FleetComponent } from './fleet/fleet.component';
import { FaqComponent } from './faq/faq.component';
import { MembershipComponent } from './membership/membership.component';
import { RulesComponent } from './rules/rules.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupAddressComponent } from './auth/signup/forms/signup-address.component';
import { SignupPersonalComponent } from './auth/signup/forms/signup-personal.component';
import { SignupPhoneComponent } from './auth/signup/forms/signup-phone.component';
import { SignupSailingComponent } from './auth/signup/forms/signup-sailing.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent, pathMatch: "full" },
	{ path: 'about', component: AboutComponent },
	{ path: 'our-fleet', component: FleetComponent },
	{ path: 'faq', component: FaqComponent },
	{ path: 'membership', component: MembershipComponent },
	{ path: 'rules-and-regulations', component: RulesComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupPersonalComponent },
	{ path: 'signup/personal', component: SignupPersonalComponent },
	{ path: 'signup/address', component: SignupAddressComponent },
	{ path: 'signup/phone', component: SignupPhoneComponent },
	{ path: 'signup/sailing', component: SignupSailingComponent },
	{ path: 'reservation', component: ReservationComponent }
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
