import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from "@angular/forms";

import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	loginForm: FormGroup;

    errorMessage: string;

	constructor(
		private authService: AuthService,
		private router: Router,
	) {
		console.log(this.loginForm);
	}

	ngOnInit() {
		this.loginForm = new FormGroup({
			email: new FormControl(null, [
				Validators.required,
				Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
			]),
			password: new FormControl(null, Validators.required)
		});
	}

	onSubmit() {
		if (this.loginForm.valid) {
			this.login();
		}
	}

	login() {
		this.authService.login(this.loginForm.value.emailAddress, this.loginForm.value.password, 'password')
			.subscribe(res => {
				this.router.navigate(['/']);
			}, error => {
				var results = error['_body'];
				this.errorMessage = error
			});
	}

}
