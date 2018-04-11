import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormData, Personal, Address, Phone, Sailing} from '../models/signUpFormData'

@Injectable()
export class FormService {

    pageCount = 0;

    submitForm(payload: string, form: FormGroup, nextPage: string) {
        payload = JSON.stringify(form.value);
        console.log(form.value);
        this.pageCount += 1;
    }

}
