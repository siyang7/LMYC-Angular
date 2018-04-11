import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { QuestionControlService } from '../../../components/questions/question-control.service';
import { RegisterQuestionsService } from '../../../components/questions/questionsService/registerQuestionsService.service';

import { Address } from '../../../models/signUpFormData'
import { Router } from '@angular/router';

@Component({
	selector: 'app-signup-address',
	templateUrl: '../../../components/dynamic-form-group/dynamic-form.component.html',
	styleUrls: ['../../../components/dynamic-form-group/dynamic-form.component.css'],
	providers: [RegisterQuestionsService, QuestionControlService]
})

export class SignupAddressComponent implements OnInit {

	questions: any[];
	form: FormGroup;

	formTitleText = "Register your Address"
	formButtonText = "Next"

	constructor(
		private router: Router,
		private qcs: QuestionControlService,
		private RegisterQuestionsService: RegisterQuestionsService
	) {
		this.questions = RegisterQuestionsService.getAddressQuestions();
	}

	ngOnInit() {
		this.form = this.qcs.toFormGroup(this.questions);
		console.log('Address form loaded!');
	}

	save(form: any): boolean {
		if (!this.form.valid) {
			return false;
		}

		console.log(this.form.value)
		return true;
	}

	buttonOnClick() {
		if (this.save(this.form)) {
			// Navigate to the phone page
			this.router.navigate(['/signup/phone']);
		}
	}
}
