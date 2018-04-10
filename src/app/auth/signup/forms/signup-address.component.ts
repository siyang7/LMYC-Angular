import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { QuestionControlService } from '../../../components/questions/question-control.service';
import { SignUpQuestionsService } from '../../../components/questions/questionsService/signUpQuestionsService.service';

import { Address } from '../../../models/signUpFormData'
import { Router } from '@angular/router';

@Component({
	selector: 'app-signup-address',
	templateUrl: '../../../components/dynamic-form-group/dynamic-form.component.html',
	styleUrls: ['../../../components/dynamic-form-group/dynamic-form.component.css'],
	providers: [SignUpQuestionsService, QuestionControlService]
})

export class SignupAddressComponent implements OnInit {

	questions: any[];
	form: FormGroup;

	title = "Register your Address"
	textButton = "Next"

	constructor(
		private router: Router,
		private qcs: QuestionControlService,
		private SignUpQuestionsService: SignUpQuestionsService
	) {
		this.questions = SignUpQuestionsService.getAddressQuestions();
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

	goToNext(form: any) {

	}

	buttonOnClick() {
		if (this.save(this.form)) {

			// Navigate to the phone page
			this.router.navigate(['/signup/phone']);
		}
	}
}
