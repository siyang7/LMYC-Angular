import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { RegisterFormService } from '../../services/registerForm.service';
import { RegisterFormData, Personal, Address, Phone, Sailing } from '../../models/registerFormData';


@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css'],
	providers: [RegisterFormService]
})
export class SignupComponent implements OnInit {

	personalTitle = 'Register Yourself';
	addressTitle = 'Register your Address';
	phoneTitle = 'Register your Phone Numbers';
	sailingTitle = 'Register your Sailing Experience';
	@Input() RegisterFormData;

	personal: Personal
	address: Address
	phone: Phone
	sailing: Sailing

	constructor(
		private router: Router,
		private registerFormService: RegisterFormService
	) {
		this.RegisterFormData = this.registerFormService.getFormData();

		this.personal = this.registerFormService.getPersonal();
		this.address = this.registerFormService.getAddress();
		this.phone = this.registerFormService.getPhone();
		this.sailing = this.registerFormService.getSailing();

		console.log('Personal form loaded!')
	}

		ngOnInit() { }

	profileSave(form: any) {
        if (!form.valid) {
            return false;
        }

        this.registerFormService.setPersonal(this.personal);
        console.log("Personal form saved!")
        return true;
    }

	addressSave(form: any) {
		if (!form.valid) {
			return false;
		}

		this.registerFormService.setAddress(this.address);
		console.log("Address form saved!")
		return true;
	}

	phoneSave(form: any) {
		if (!form.valid) {
			return false;
		}

		this.registerFormService.setPhone(this.phone);
		console.log("Phone form saved!")
		return true;
	}

	sailingSave(form: any) {
		if (!form.valid) {
			return false;
		}

		this.registerFormService.setSailing(this.sailing);
		console.log("Sailing form saved!")
		return true;
	}

    submitRegistrationFrom(
		personalForm: any,
		addressForm: any,
		phoneForm: any,
		sailingForm: any
	) {
        if (
			this.profileSave(personalForm) &&
			this.addressSave(addressForm) &&
			this.phoneSave(phoneForm) &&
			this.sailingSave(sailingForm)
		) {
            // this.router.navigate(['/signup/address']);
        }
		else {
		}
    }

}
