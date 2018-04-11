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

			new DropdownQuestion({
				key: 'duration',
				label: 'Number of Hours',
				options: [
					{ key: '1', value: '1' },
					{ key: '2', value: '2' },
					{ key: '3', value: '3' },
					{ key: '4', value: '4' },
					{ key: '5', value: '5' },
					{ key: '6', value: '6' },
					{ key: '7', value: '7' },
					{ key: '8', value: '8' },
					{ key: '9', value: '9' },
					{ key: '10', value: '10' }
				],
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
