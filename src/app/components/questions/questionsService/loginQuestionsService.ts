import { Injectable } from '@angular/core';

import { QuestionBase } from '../question-base';
import { TextQuestion } from '../question-textbox';

import { FormData, Personal } from '../../../models/signUpFormData'

@Injectable()
export class RegisterQuestionsService {

	private formData: FormData = new FormData();

	getSignInQuestions() {

		let questions: QuestionBase<any>[] = [

			new TextQuestion({
				key: 'emailAddress',
				label: 'Email',
				type: 'email',
				required: true,
				order: 1
			}),

			new TextQuestion({
				key: 'password',
				label: 'Password',
				type: 'password',
				required: true,
				order: 2
			}),

		];

		return questions.sort((a, b) => a.order - b.order);
	}
}
