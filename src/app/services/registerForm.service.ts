import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Md5 } from '../../../node_modules/ts-md5/dist/md5';
import { RegisterFormData, Personal, Address, Phone, Sailing } from '../models/registerFormData';

@Injectable()
export class RegisterFormService {

	private formData: RegisterFormData = new RegisterFormData();
	private isPersonalFormValid: boolean = false;
	private isWorkFormValid: boolean = false;
	private isAddressFormValid: boolean = false;

	// Set regiter form data

	setPersonal(data: Personal) {
		this.formData.firstName = data.firstName;
		this.formData.lastName = data.lastName;
		this.formData.email = data.email;
		this.formData.password = String(Md5.hashStr(data.password));
	}

	// Submit form

	submitForm(payload: string, form: FormGroup) {
		payload = JSON.stringify(form.value);
	}
}
