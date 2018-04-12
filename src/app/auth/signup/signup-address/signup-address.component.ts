import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {Address} from '../../../models/registerFormData';
import {RegisterFormService} from '../../../services/registerForm.service'

@Component({
  selector: 'app-signup-address',
  templateUrl: './signup-address.component.html',
  styleUrls: ['./signup-address.component.css']
})
export class SignupAddressComponent implements OnInit {

    address: Address
    form: any;

    constructor(
        private router: Router,
        private registerFormService: RegisterFormService
    ) { }

    ngOnInit() {
        this.address = this.registerFormService.getAddress();
        console.log('Address form loaded!')
    }

    save(form: any) {
        if (!form.valid) {
            return false;
        }

        this.registerFormService.setAddress(this.address);
        console.log("Address form saved!")
        return true;
    }

    goToNext(form: any) {
        if (this.save(form)) {
            console.log("Address gotoNext!")
            // this.router.navigate(['/signup/phone']);
        }
    }

}
