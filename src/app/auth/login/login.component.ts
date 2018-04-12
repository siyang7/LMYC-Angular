import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    form: FormGroup;
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

	save(form: any): boolean {
		if (!form.valid) {
			return false;
		}

		console.log(form.value)
		return true;
	}

	onSubmit() {
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
