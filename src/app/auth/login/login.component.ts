import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { QuestionControlService } from '../../components/questions/question-control.service';
import { SignUpQuestionsService } from '../../components/questions/questionsService/signUpQuestionsService.service';

import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [SignUpQuestionsService, QuestionControlService]
})

export class LoginComponent implements OnInit {

	questions: any[];
	form: FormGroup;

	titleTextString: string;
	buttonTextString: string;
	errorMessage: string;

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
		this.titleTextString = "Please Login"
		this.buttonTextString = "Login"

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
			this.login();
		}
	}

	login() {
		this.authService.login(this.form.value.emailAddress, this.form.value.password, 'password')
			.subscribe(res => {
				this.router.navigate(['/']);
			}, error => {
				var results = error['_body'];
				this.errorMessage = error
			});
	}
}
