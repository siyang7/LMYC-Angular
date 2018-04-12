import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {Volunteer} from '../models/volunteerFormData'

@Injectable()
export class VolunteerFormService {
	private formData: Volunteer = new Volunteer();

	getVolunteerForm(): Volunteer {
		return this.formData;
	}

}
