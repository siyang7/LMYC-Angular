import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { SignUpQuestionsService } from '../../components/questions/signUpQuestionsService.service';

import { User } from '../../models/user'
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

	constructor(
		private authService: AuthService,
		private router: Router,
		service: SignUpQuestionsService
	) {
		this.questions = service.getQuestions();
	}

	newUser: User = new User();

	// 	onSubmit() {
	// 		console.log(this.signUpForm);
	//
	// 		this.newUser.firstName = this.signUpForm.value.firstName;
	// 		this.newUser.lastName = this.signUpForm.get("lastName").value;
	// 		this.newUser.userName = this.signUpForm.get("userName").value;
	// 		this.newUser.street = this.signUpForm.get("street").value;
	// 		this.newUser.city = this.signUpForm.get("city").value;
	// 		this.newUser.postalCode = this.signUpForm.get("postalCode").value;
	// 		this.newUser.country = this.signUpForm.get("country").value;
	// 		this.newUser.mobilePhone = this.signUpForm.get("mobilePhone").value;
	// 		this.newUser.workPhone = this.signUpForm.get("workPhone").value;
	// 		this.newUser.homePhone = this.signUpForm.get("homePhone").value;
	// 		this.newUser.emergencyContactOnePhone = this.signUpForm.get("emergencyContactOnePhone").value;
	// 		this.newUser.emergencyContactTwoPhone = this.signUpForm.get("emergencyContactTwoPhone").value;
	// 		this.newUser.sailingQualifications = this.signUpForm.get("sailingQualifications").value;
	// 		this.newUser.skills = this.signUpForm.get("skills").value;
	// 		this.newUser.sailingExperience = this.signUpForm.get("sailingExperience").value;
	// 		this.newUser.email = this.signUpForm.get("email").value;
	// 		this.newUser.password = this.signUpForm.get("password").value;

	// 		if (!this.newUser) { return; }
	// 		this.authService.signup(this.newUser)
	// 		// .then(newCartoonCharacter => {
	// 		//   this.myForm.reset();
	// 		//   this.router.navigate(['/home']);
	// 		// });
	// 	}

	ngOnInit(): void {
		this.signUpForm = new FormGroup({
			'firstName': new FormControl(this.newUser.firstName, Validators.required),
			'lastName': new FormControl(this.newUser.lastName, Validators.required),
			'street': new FormControl(this.newUser.street, Validators.required),
			'city': new FormControl(this.newUser.city, Validators.required),
			'postalCode': new FormControl(this.newUser.postalCode, Validators.required),
			'country': new FormControl(this.newUser.country, Validators.required),
			'email': new FormControl(this.newUser.email, Validators.required),
			'password': new FormControl(this.newUser.password, Validators.required)
		});
	}

	// 	get firstName() { return this.signUpForm.get('firstName'); }
	//
	// 	get street() { return this.signUpForm.get('street'); }
	//
	// 	get city() { return this.signUpForm.get('city'); }
	//
	// 	get postalCode() { return this.signUpForm.get('postalCode'); }
	//
	// 	get country() { return this.signUpForm.get('postalCode'); }
	//
	// 	get lastName() { return this.signUpForm.get('lastName'); }
	//
	// 	get email() { return this.signUpForm.get('email'); }
	//
	// 	get password() { return this.signUpForm.get('password'); }
}
