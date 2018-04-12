import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Phone } from '../../../models/registerFormData';
import { RegisterFormService } from '../../../services/registerForm.service'

@Component({
	selector: 'app-signup-phone',
	templateUrl: './signup-phone.component.html',
	styleUrls: ['./signup-phone.component.css']
})
export class SignupPhoneComponent implements OnInit {

	phone: Phone
	form: any;

	constructor(
		private router: Router,
		private registerFormService: RegisterFormService
	) { }

	ngOnInit() {
		this.phone = this.registerFormService.getPhone();
		console.log('Phone form loaded!')
	}

	save(form: any) {
		if (!form.valid) {
			return false;
		}

		this.registerFormService.setPhone(this.phone);
		console.log("Phone form saved!")
		return true;
	}

	goToNext(form: any) {
		if (this.save(form)) {
			console.log("Phone gotoNext!")
			// this.router.navigate(['/signup/sailing']);
		}
	}

}
