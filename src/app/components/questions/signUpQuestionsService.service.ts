import { Injectable } from '@angular/core';

import { QuestionBase } from './question-base';
import { TextQuestion } from './question-textbox';

@Injectable()
export class SignUpQuestionsService {

	// Todo: get from a remote source of question metadata
	// Todo: make asynchronous
	getQuestions() {

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
