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
		this.formData.userName = data.userName;
		this.formData.email = data.email;
		this.formData.password = String(Md5.hashStr(data.password));
	}


    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
			userName: this.formData.userName,
            email: this.formData.email,
			password: this.formData.password

        };

        return personal;
    }

	setAddress(data: Address) {
		this.formData.street = data.street;
		this.formData.city = data.city;
		this.formData.country = data.country;
		this.formData.postalCode = data.postalCode;
	}


	getAddress(): Address {
		// Return the Address data
		var address: Address = {
			street: this.formData.street,
			city: this.formData.city,
			country: this.formData.country,
			postalCode: this.formData.postalCode,

		};

		return address;
	}

	setPhone(data: Phone) {
		this.formData.mobilePhone = data.mobilePhone;
		this.formData.homePhone = data.homePhone;
		this.formData.workPhone = data.workPhone;
		this.formData.emergencyContactOnePhone = data.emergencyContactOnePhone;
		this.formData.emergencyContactTwoPhone = data.emergencyContactTwoPhone;
	}


	getPhone(): Phone {
		// Return the Phone data
		var phone: Phone = {
			mobilePhone: this.formData.mobilePhone,
			homePhone: this.formData.homePhone,
			workPhone: this.formData.workPhone,
			emergencyContactOnePhone: this.formData.emergencyContactOnePhone,
			emergencyContactTwoPhone: this.formData.emergencyContactTwoPhone
		};
		return phone;
	}

	setSailing(data: Sailing) {
		this.formData.sailingQualifications = data.sailingQualifications;
		this.formData.skills = data.skills;
		this.formData.sailingExperience = data.sailingExperience;
	}


	getSailing(): Sailing {
		// Return the Sailing data
		var sailing: Sailing = {
			sailingQualifications: this.formData.sailingQualifications,
			skills: this.formData.skills,
			sailingExperience: this.formData.sailingExperience
		};
		return sailing;
	}


    getFormData(): RegisterFormData {
        // Return the entire Form Data
        return this.formData;
    }

	submitForm(payload: string, form: FormGroup) {
		payload = JSON.stringify(form.value);
	}
}
