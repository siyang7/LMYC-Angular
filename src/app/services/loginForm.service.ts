import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Md5 } from '../../../node_modules/ts-md5/dist/md5';

import {loginModel} from '../models/loginModel';


@Injectable()
export class LoginFormService {

	private formData: loginModel = new loginModel();


	setLogin(data: loginModel) {
		this.formData.userName = data.userName;
		this.formData.password = String(Md5.hashStr(data.password));
	}

	getLogin(): loginModel {
		// Return the Personal data
		var loginmodel: loginModel = {
			userName: this.formData.userName,
			password: this.formData.password,
		};

		console.log(loginModel)
		return loginmodel;
	}

}
