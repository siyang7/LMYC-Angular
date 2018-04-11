import { Injectable } from '@angular/core';

import { QuestionBase } from '../../questions/question-base'
import { TextQuestion } from '../../questions/question-textbox'


@Injectable()
export class RegisterQuestionsService {

	private formData: FormData = new FormData();
	private isPersonalFormValid: boolean = false;
	private isWorkFormValid: boolean = false;
	private isAddressFormValid: boolean = false;

	// REGISTER

	// TODO: get from a remote source of question metadata
	// TODO: make asynchronous
	getPersonalQuestions() {

		// TODO: Sailing Quaifications Form
		// TODO: Skills Form
		// TODO: Sailing Experience Form
		// TODO: Password Form
		let questions: QuestionBase<any>[] = [

			// PERSONAL INFO

			new TextQuestion({
				key: 'firstName',
				label: 'First name',
				required: true,
				order: 1
			}),

			new TextQuestion({
				key: 'lastName',
				label: 'Last name',
				required: true,
				order: 2
			}),

			new TextQuestion({
				key: 'userName',
				label: 'Username',
				required: true,
				order: 3
			}),

			new TextQuestion({
				key: 'emailAddress',
				label: 'Email',
				type: 'email',
				required: true,
				order: 4
			}),

			new TextQuestion({
				key: 'password',
				label: 'Password',
				type: 'password',
				required: true,
				order: 5
			}),

		];

		return questions.sort((a, b) => a.order - b.order);
	}

	getAddressQuestions() {

		// TODO: Sailing Quaifications Form
		// TODO: Skills Form
		// TODO: Sailing Experience Form
		// TODO: Password Form
		let questions: QuestionBase<any>[] = [

			// ADDRESS

			new TextQuestion({
				key: 'street',
				label: 'Street',
				required: true,
				order: 1
			}),

			new TextQuestion({
				key: 'city',
				label: 'City',
				required: true,
				order: 2
			}),

			new TextQuestion({
				key: 'postalCode',
				label: 'Postal Code',
				required: true,
				order: 3
			}),

			new TextQuestion({
				key: 'country',
				label: 'Country',
				required: true,
				order: 4
			})

		];

		return questions.sort((a, b) => a.order - b.order);
	}

	getPhoneQuestions() {

		// TODO: Sailing Quaifications Form
		// TODO: Skills Form
		// TODO: Sailing Experience Form
		// TODO: Password Form
		let questions: QuestionBase<any>[] = [

			new TextQuestion({
				key: 'homePhone',
				label: 'Home Phone',
				required: true,
				order: 1
			}),

			new TextQuestion({
				key: 'mobilePhone',
				label: 'Mobile Phone',
				required: true,
				order: 2
			}),

			new TextQuestion({
				key: 'workPhone',
				label: 'Work Phone',
				order: 3
			}),

			new TextQuestion({
				key: 'emergencyContactOnePhone',
				label: 'Emergency Contact Phone One',
				order: 4
			}),

			new TextQuestion({
				key: 'emergencyContactTwoPhone',
				label: 'Emergency Contact Phone Two',
				order: 5
			}),
		];

		return questions.sort((a, b) => a.order - b.order);
	}

	getSailingQuestions() {

		let questions: QuestionBase<any>[] = [

			new TextQuestion({
				key: 'skills',
				label: 'Skills',
				order: 1
			}),

			new TextQuestion({
				key: 'sailingExperience',
				label: 'Sailing Experience',
				order: 2
			}),

			new TextQuestion({
				key: 'sailingQualifications',
				label: 'Sailing Qualifications',
				order: 3
			}),

		];

		return questions.sort((a, b) => a.order - b.order);
	}

	// SIGN IN

	getSignInQuestions() {

		let questions: QuestionBase<any>[] = [

			new TextQuestion({
				key: 'emailAddress',
				label: 'Email',
				type: 'email',
				required: true,
				order: 1
			}),

			new TextQuestion({
				key: 'password',
				label: 'Password',
				type: 'password',
				required: true,
				order: 2
			}),

		];

		return questions.sort((a, b) => a.order - b.order);
	}

	// getPersonal(): Personal {
	// 	// Return the Personal data
	// 	var personal: Personal = {
	// 		firstName: this.formData.firstName,
	// 		lastName: this.formData.lastName,
	// 		email: this.formData.email
	// 	};
	// 	return personal;
	// }
	//
	// setPersonal(data: Personal) {
	// 	// Update the Personal data only when the Personal Form had been validated successfully
	// 	this.isPersonalFormValid = true;
	// 	this.formData.firstName = data.firstName;
	// 	this.formData.lastName = data.lastName;
	// 	this.formData.email = data.email;
	// }
	//
	// getWork() : string {
	// 	// Return the work type
	// 	return this.formData.work;
	// }
	//
	// setWork(data: string) {
	// 	// Update the work type only when the Work Form had been validated successfully
	// 	this.isWorkFormValid = true;
	// 	this.formData.work = data;
	// }
	//
	// getAddress() : Address {
	// 	// Return the Address data
	// 	var address: Address = {
	// 		street: this.formData.street,
	// 		city: this.formData.city,
	// 		country: this.formData.country,
	// 		zip: this.formData.zip
	// 	};
	// 	return address;
	// }
	//
	// setAddress(data: Address) {
	// 	// Update the Address data only when the Address Form had been validated successfully
	// 	this.isAddressFormValid = true;
	// 	this.formData.street = data.street;
	// 	this.formData.city = data.city;
	// 	this.formData.country = data.country;
	// 	this.formData.zip = data.zip;
	// }
	//
	// getFormData(): FormData {
	// 	// Return the entire Form Data
	// 	return this.formData;
	// }
	//
	// resetFormData(): FormData {
	// 	// Return the form data after all this.* members had been reset
	// 	this.formData.clear();
	// 	this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
	// 	return this.formData;
	// }
	//
	// isFormValid() {
	// 	// Return true if all forms had been validated successfully; otherwise, return false
	// 	return this.isPersonalFormValid &&
	// 			this.isWorkFormValid &&
	// 			this.isAddressFormValid;
	// }
}
