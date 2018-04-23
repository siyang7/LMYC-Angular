import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../questions/question-base';
import { QuestionControlService } from '../questions/question-control.service';
import { RegisterFormService } from '../../services/registerForm.service'

@Component({
	selector: 'app-dynamic-form',
	templateUrl: './dynamic-form.component.html',
	styleUrls: ['./dynamic-form.component.css'],
	providers: [QuestionControlService, RegisterFormService]
})
export class DynamicFormComponent implements OnInit {

	@Input() questions: QuestionBase<any>[] = [];
	@Input('componentButtonText') formButtonText: string;
	@Input('componentTitleText') formTitleText: string;

	form: FormGroup;

	payload = '';

	constructor(
		private qcs: QuestionControlService,
		private registerFormService: RegisterFormService,
	) {
	}

	ngOnInit() {
		this.form = this.qcs.toFormGroup(this.questions);
	}

	save(form: any): boolean {
		if (!this.form.valid) {
			return false;
		}

		console.log(this.form.value)
		return true;
	}

	buttonOnClick() {
		if (this.save(this.form)) {
			this.registerFormService.submitForm(this.payload, this.form);
		}

	}
}
