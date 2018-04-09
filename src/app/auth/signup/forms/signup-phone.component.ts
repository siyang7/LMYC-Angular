import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { QuestionControlService } from '../../../components/questions/question-control.service';
import { SignUpQuestionsService } from '../../../components/questions/questionsService/signUpQuestionsService.service';

import { FormData, Phone } from '../../../models/signUpFormData'
import { Router } from '@angular/router';

@Component({
	selector: 'app-signup-phone',
	templateUrl: '../../../components/dynamic-form-group/dynamic-form.component.html',
	styleUrls: ['../../../components/dynamic-form-group/dynamic-form.component.css'],
	providers: [SignUpQuestionsService, QuestionControlService]
})

export class SignupPhoneComponent implements OnInit {

	questions: any[];
	form: FormGroup;

	title = "Register your Phone Numbers"
	textButton = "Next"

	constructor(
		private authService: AuthService,
		private router: Router,
		private qcs: QuestionControlService,
		private SignUpQuestionsService: SignUpQuestionsService
	) {
		this.questions = SignUpQuestionsService.getPhoneQuestions();
	}

	ngOnInit() {
		this.form = this.qcs.toFormGroup(this.questions);
		// this.phoneType = this.SignUpQuestionsService.getphone();
		console.log('phone form loaded!');
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
			// Navigate to the address page
			this.router.navigate(['/signup/sailing']);
		}

	}
}
