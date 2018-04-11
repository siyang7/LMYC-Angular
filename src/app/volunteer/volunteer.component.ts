import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { QuestionControlService } from '../components/questions/question-control.service';
import { VolunteerQuestionService } from '../components/questions/questionsService/volunteerQuestion.service';

import { Router } from '@angular/router';

@Component({
	selector: 'app-volunteer',
	templateUrl: '../components/dynamic-form-group/dynamic-form.component.html',
	styleUrls: ['../components/dynamic-form-group/dynamic-form.component.css'],
	providers: [VolunteerQuestionService, QuestionControlService]
})

export class VolunteerComponent implements OnInit {

	form: FormGroup;
	questions: any[];

	formTitleText = "Register Volunteers"
	formButtonText = "Submit"
	errorMessage: string;

	constructor(
		private router: Router,
		private qcs: QuestionControlService,
		private VolunteerQuestionService: VolunteerQuestionService
	) {
		this.questions = VolunteerQuestionService.getVolunteerQuestions();
	}

	ngOnInit() {
		this.form = this.qcs.toFormGroup(this.questions);
		console.log('Volunteer form loaded!');
	}

	save(form: any): boolean {
		if (!this.form.valid) {
			return false;
		}

		console.log(this.form.value)
		return true;
	}

	buttonOnClick() {

	}
}
