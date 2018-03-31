import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements onInit {

	user = { email: '', password: '' };

	loginForm: FormGroup;

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
