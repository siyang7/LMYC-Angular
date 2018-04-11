import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../questions/question-base';
import { QuestionControlService } from '../questions/question-control.service';
import { FormService } from '../../services/form.service'

@Component({
	selector: 'app-dynamic-form',
	templateUrl: './dynamic-form.component.html',
	styleUrls: ['./dynamic-form.component.css'],
	providers: [QuestionControlService, FormService]
})
export class DynamicFormComponent implements OnInit {

	@Input() questions: QuestionBase<any>[] = [];
	@Input('componentButtonText') formButtonText: string;
	@Input('componentTitleText') formTitleText: string;

	form: FormGroup;

	constructor(
		private qcs: QuestionControlService,
		private formService: FormService,
	) {
	}

	ngOnInit() {
		this.form = this.qcs.toFormGroup(this.questions);
	}
}
