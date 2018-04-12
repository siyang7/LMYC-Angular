import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Sailing } from '../../../models/registerFormData';
import { RegisterFormService } from '../../../services/registerForm.service'

@Component({
  selector: 'app-signup-sailing',
  templateUrl: './signup-sailing.component.html',
  styleUrls: ['./signup-sailing.component.css']
})
export class SignupSailingComponent implements OnInit {

    sailing: Sailing
    form: any;

    constructor(
		private router: Router,
		private registerFormService: RegisterFormService
	) { }

	ngOnInit() {
		this.sailing = this.registerFormService.getSailing();
		console.log('Sailing form loaded!')
	}

	save(form: any) {
		if (!form.valid) {
			return false;
		}

		this.registerFormService.setSailing(this.sailing);
		console.log("Sailing form saved!")
		return true;
	}

	goToNext(form: any) {
		if (this.save(form)) {
			console.log("Sailing gotoNext!")
			// this.router.navigate(['login']);
		}
	}

}
