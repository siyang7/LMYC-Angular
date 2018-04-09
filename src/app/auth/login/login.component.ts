import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { QuestionControlService } from '../../components/questions/question-control.service';
import { SignUpQuestionsService } from '../../components/questions/questionsService/signUpQuestionsService.service';

import { User } from '../../models/user'
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: '../../components/dynamic-form-group/dynamic-form.component.html',
	styleUrls: ['../../components/dynamic-form-group/dynamic-form.component.css'],
	providers: [SignUpQuestionsService, QuestionControlService]
})

export class LoginComponent implements OnInit {

	questions: any[];
	form: FormGroup;

	title = "Please Login"
	textButton = "Login"

	constructor(
		private authService: AuthService,
		private router: Router,
		private qcs: QuestionControlService,
		private SignUpQuestionsService: SignUpQuestionsService
	) {
		this.questions = SignUpQuestionsService.getSignInQuestions();
	}

	ngOnInit() {
		this.form = this.qcs.toFormGroup(this.questions);
		console.log('Sign in form loaded!');
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
			this.router.navigate(['/signup/address']);
		}

	}

}
