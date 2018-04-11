import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { QuestionControlService } from '../../../components/questions/question-control.service';
import { RegisterQuestionsService } from '../../../components/questions/questionsService/registerQuestionsService.service';
import { RegisterFormService } from '../../../services/registerForm.service';

import { RegisterFormData, Phone } from '../../../models/registerFormData'
import { Router } from '@angular/router';

@Component({
	selector: 'app-signup-phone',
	templateUrl: '../../../components/dynamic-form-group/dynamic-form.component.html',
	styleUrls: ['../../../components/dynamic-form-group/dynamic-form.component.css'],
	providers: [RegisterQuestionsService, QuestionControlService, RegisterFormService]
})

export class SignupPhoneComponent implements OnInit {

	questions: any[];
	form: FormGroup;

	formTitleText = "Register your Phone Numbers"
	formButtonText = "Next"

	payload = ''

	constructor(
		private router: Router,
		private qcs: QuestionControlService,
		private RegisterQuestionsService: RegisterQuestionsService,
		private RegisterFormService: RegisterFormService
	) {
		this.questions = RegisterQuestionsService.getPhoneQuestions();
	}

	ngOnInit() {
		this.form = this.qcs.toFormGroup(this.questions);
		console.log('Phone form loaded!');
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

			this.RegisterFormService.submitForm(this.payload, this.form);

			this.router.navigate(['/signup/sailing']);
		}

	}
}
