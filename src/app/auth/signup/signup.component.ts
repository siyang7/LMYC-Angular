import { SignUpQuestionsService } from './../../components/questions/questionsService/RegisterQuetionsService';
import { IUser } from './../../models/user';
import { AuthService } from './../../services/auth.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { Router } from '@angular/router';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css'],
	providers: [SignUpQuestionsService]
})

export class SignupComponent {

	signUpForm: FormGroup;
	questions: any[];

	titleTextString: string;
	buttonTextString: string;

	constructor(
		private authService: AuthService,
		private router: Router,
		private service: SignUpQuestionsService
	) {
		this.questions = service.getAddressQuestions();
	}

	ngOnInit(): void {
		this.titleTextString = "Register"
		this.buttonTextString = "Submit"
	}
}
