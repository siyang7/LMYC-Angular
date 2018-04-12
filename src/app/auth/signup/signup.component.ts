import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { RegisterFormService } from '../../services/registerForm.service';
import { RegisterFormData, Personal, Address, Phone, Sailing } from '../../models/registerFormData';


@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css'],
	providers: [RegisterFormService]
})
export class SignupComponent implements OnInit {

	title = 'Multi-Step Wizard';
	@Input() RegisterFormData;

	constructor(
		private router: Router,
		private registerFormService: RegisterFormService
	) {
		this.RegisterFormData = this.registerFormService.getFormData();
		console.log(this.title + ' loaded!');
	}

	ngOnInit() {
	}
}
