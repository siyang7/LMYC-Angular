import { RegisterQuestionsService } from './../../components/questions/questionsService/registerQuestionsService.service';
import { IUser } from './../../models/user';
import { AuthService } from './../../services/auth.service';
import { RegisterFormService } from '../../services/registerForm.service'

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { Router } from '@angular/router';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css'],
	providers: [RegisterQuestionsService, RegisterFormService]
})

export class SignupComponent {

	signupService: RegisterQuestionsService

	signUpForm: FormGroup;

	questions: any[];
	titleTextString: string;
	buttonTextString: string;

	constructor(
		private authService: AuthService,
		private router: Router,
		private service: RegisterQuestionsService,
		private registerFormService: RegisterFormService
	) { }

	ngOnInit(): void {
		this.questions = this.service.getPersonalQuestions();
		this.titleTextString = "Register"
		this.buttonTextString = "Submit"
	}

}
