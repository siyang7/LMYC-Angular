import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {Personal} from '../../../models/registerFormData';
import {RegisterFormService} from '../../../services/registerForm.service'

@Component({
  selector: 'app-signup-personal',
  templateUrl: './signup-personal.component.html',
  styleUrls: ['./signup-personal.component.css']
})
export class SignupPersonalComponent implements OnInit {

    personal: Personal
    form: any;

  constructor(
      private router: Router,
      private registerFormService: RegisterFormService
  ) { }

  ngOnInit() {
      this.personal = this.registerFormService.getPersonal();
      console.log('Personal form loaded!')
  }

  save(form: any) {
      if (!form.valid) {
          return false;
      }

      this.registerFormService.setPersonal(this.personal);
      console.log("Personal form saved!")
      return true;
  }

  goToNext(form: any) {
      if (this.save(form)) {
          console.log("Personal gotoNext!")
          // this.router.navigate(['/signup/address']);
      }
  }

}
