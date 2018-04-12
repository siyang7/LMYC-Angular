import { ContactQuestionsService } from './../components/questions/questionsService/contactQuestionsService';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { QuestionControlService } from '../components/questions/question-control.service';

import { Router } from '@angular/router';

@Component({
	selector: 'app-signup-contact',
	templateUrl: '../components/dynamic-form-group/dynamic-form.component.html',
	styleUrls: ['../components/dynamic-form-group/dynamic-form.component.css'],
	providers: [ContactQuestionsService, QuestionControlService]
})

export class ContactComponent implements OnInit {

	questions: any[];
	form: FormGroup;

	formTitleText = "Contact Us"
	formButtonText = "Submit"

	constructor(
		private router: Router,
		private qcs: QuestionControlService,
		private ContactQuestionsService: ContactQuestionsService
	) {
		this.questions = ContactQuestionsService.getContactQuestions();
	}


	ngOnInit() {
		this.form = this.qcs.toFormGroup(this.questions);
		console.log('sailing form loaded!');
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
			this.router.navigate(['/login']);
		}

	}
}
