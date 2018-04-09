import { Injectable } from '@angular/core';

import { QuestionBase } from '../question-base';
import { TextQuestion } from '../question-textbox';

@Injectable()
export class ContactQuetionsService {

	getContactQuestions() {

		let questions: QuestionBase<any>[] = [

			new TextQuestion({
				key: 'firstName',
				label: 'First name',
				required: true,
				order: 1
			}),

			new TextQuestion({
				key: 'lastName',
				label: 'Last name',
				required: true,
				order: 2
			}),

			new TextQuestion({
				key: 'phone',
				label: 'Email',
				type: 'email',
				required: true,
				order: 3
			}),

			new TextQuestion({
				key: 'phone',
				label: 'Phone',
				required: true,
				order: 4
			}),

			new TextQuestion({
				key: 'subject',
				label: 'Subject',
				required: true,
				order: 5
			}),

		];

		return questions.sort((a, b) => a.order - b.order);
	}
}
