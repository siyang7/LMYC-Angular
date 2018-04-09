

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { User } from '../../models/user'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	loginForm: FormGroup;

	constructor (
		private authService: AuthService,
	    private router: Router
	) {}

	user: User = new User();

	onSubmit() {
		console.log(this.loginForm);
		this.user.email = this.loginForm.get("email").value;
		this.user.password = this.loginForm.get("password").value;

		if (!this.user) { return; }
		this.authService.signup(this.user)
		// .then(newCartoonCharacter => {
		//   this.myForm.reset();
		//   this.router.navigate(['/home']);
		// });
	}

	ngOnInit(): void {
		this.loginForm = new FormGroup({
			'email': new FormControl(this.user.email, [
				Validators.required,
				Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
			]),
			'password': new FormControl(this.user.password, Validators.required)
		});
	}

	get email() { return this.loginForm.get('email'); }

	get password() { return this.loginForm.get('password'); }

}
