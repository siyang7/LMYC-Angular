import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { QuestionControlService } from '../../../components/questions/question-control.service';
import { SignUpQuestionsService } from '../../../components/questions/questionsService/signUpQuestionsService.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-signup-sailing',
	templateUrl: '../../../components/dynamic-form-group/dynamic-form.component.html',
	styleUrls: ['../../../components/dynamic-form-group/dynamic-form.component.css'],
	providers: [SignUpQuestionsService, QuestionControlService]
})

export class SignupSailingComponent implements OnInit {

	questions: any[];
	form: FormGroup;

	title = "Register your Sailing Experience"
	textButton = "Submit"

	constructor(
		private authService: AuthService,
		private router: Router,
		private qcs: QuestionControlService,
		private SignUpQuestionsService: SignUpQuestionsService
	) {
		this.questions = SignUpQuestionsService.getSailingQuestions();
	}


	ngOnInit() {
		this.form = this.qcs.toFormGroup(this.questions);
		// this.sailingType = this.SignUpQuestionsService.getsailing();
		console.log('sailing form loaded!');
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
			this.router.navigate(['/login']);
		}

	}
}
