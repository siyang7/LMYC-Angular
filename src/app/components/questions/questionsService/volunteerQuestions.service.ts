import { Injectable } from '@angular/core';

import { DropdownQuestion } from '../question-dropdown';
import { QuestionBase } from '../question-base';
import { TextQuestion } from '../question-textbox';

@Injectable()
export class VolunteerQuestionService {

	private formData: FormData = new FormData();

	getVolunteerQuestions() {

		let questions: QuestionBase<any>[] = [

			new TextQuestion({
				key: 'date',
				label: 'Date',
				type: 'date',
				required: true,
				order: 1
			}),

			new TextQuestion({
				key: 'duration',
				label: 'Number of Hours',
				type: 'number',
				max: 24,
				required: true,
				order: 2
			}),

			new TextQuestion({
				key: 'description',
				label: 'Description',
				required: true,
				order: 3
			}),

			new DropdownQuestion({
				key: 'classificationCode',
				label: 'Classification Code',
				options: [
					{ key: '0', value: 'Boat Maint (Hard)' },
					{ key: '1', value: 'Boat Maint (Monthly)' },
					{ key: '2', value: 'Cruise Skipper Training' },
					{ key: '3', value: 'Day Skipper Training' }
				],
				order: 4
			})

		];

		return questions.sort((a, b) => a.order - b.order);
	}
}
