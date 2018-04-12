import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { VolunteerFormService } from '../services/volunteerForm.service';
import { Volunteer } from '../models/volunteerFormData'

import { Router } from '@angular/router';

@Component({
	selector: 'app-volunteer',
	templateUrl: './volunteer.component.html',
	styleUrls: ['./volunteer.component.css'],
	providers: [VolunteerFormService]
})

export class VolunteerComponent implements OnInit {

	@Input() Volunteer;

	constructor(
		private router: Router,
		private volunteerformService: VolunteerFormService
	) { }

	ngOnInit() {
		this.Volunteer = this.volunteerformService.getVolunteerForm();
		console.log('Volunteer form loaded!');
	}

	volunteerSave(form: any) {
		if (!form.valid) {
			return false;
		}

		console.log("Volunteer form saved!")
		return true;
	}

	buttonOnClick(form: any) {
		if (this.volunteerSave(form)) {
			console.log("Form saved")
		}
	}
}
