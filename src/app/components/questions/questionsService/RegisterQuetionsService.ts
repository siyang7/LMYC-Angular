import { Injectable } from '@angular/core';

import { QuestionBase } from '../question-base';
import { TextQuestion } from '../question-textbox';

import { FormData, Personal } from '../../../models/signUpFormData'

@Injectable()
export class SignUpQuestionsService {

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
}
