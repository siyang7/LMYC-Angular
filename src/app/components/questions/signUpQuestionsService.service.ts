import { Injectable } from '@angular/core';

import { QuestionBase } from './question-base';
import { TextQuestion } from './question-textbox';

@Injectable()
export class SignUpQuestionsService {

	// Todo: get from a remote source of question metadata
	// Todo: make asynchronous
	getQuestions() {

		// TODO: Last Name Form
		// TODO: Username Form
		// TODO: Street Form
		// TODO: City Form
		// TODO: Postal Code Form
		// TODO: Country Form
		// TODO: Home Phone Form
		// TODO: Mobile Phone Form
		// TODO: Work Phone Form
		// TODO: Emergency Contact One Phone Form
		// TODO: Emergency Contact Two Phone Form
		// TODO: Sailing Quaifications Form
		// TODO: Skills Form
		// TODO: Sailing Experience Form
		// TODO: Password Form
		let questions: QuestionBase<any>[] = [

			new TextQuestion({
				key: 'firstName',
				label: 'First name',
				required: true,
				order: 1
			}),

			new TextQuestion({
				key: 'emailAddress',
				label: 'Email',
				type: 'email',
				required: true,
				order: 2
			})
		];

		return questions.sort((a, b) => a.order - b.order);
	}
}
