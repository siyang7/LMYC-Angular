import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from '../../models/user'
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  newUser: User = new User();
  onSubmit() {
    console.log(this.myForm);
    this.newUser.firstName = this.myForm.value.firstName;
    this.newUser.lastName = this.myForm.get("lastName").value;
    this.newUser.userName = this.myForm.get("userName").value;
    this.newUser.street = this.myForm.get("street").value;
    this.newUser.city = this.myForm.get("city").value;
    this.newUser.postalCode = this.myForm.get("postalCode").value;
    this.newUser.country = this.myForm.get("country").value;
    this.newUser.mobilePhone = this.myForm.get("mobilePhone").value;
    this.newUser.workPhone = this.myForm.get("workPhone").value;
    this.newUser.homePhone = this.myForm.get("homePhone").value;
    this.newUser.emergencyContactOnePhone = this.myForm.get("emergencyContactOnePhone").value;
    this.newUser.emergencyContactTwoPhone = this.myForm.get("emergencyContactTwoPhone").value;
    this.newUser.sailingQualifications = this.myForm.get("sailingQualifications").value;
    this.newUser.skills = this.myForm.get("skills").value;
    this.newUser.sailingExperience = this.myForm.get("sailingExperience").value;
    this.newUser.email = this.myForm.get("email").value;
    this.newUser.password = this.myForm.get("password").value;

    if(!this.newUser) {return;}
    this.authService.signup(this.newUser)
      .then(newCartoonCharacter => {
        this.myForm.reset();
        this.router.navigate(['/home']);
      });
    
  }

  

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      street: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      userName: new FormControl(null, Validators.required),
      postalCode: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      mobilePhone: new FormControl(null, Validators.required),
      workPhone: new FormControl(null, Validators.required),
      homePhone: new FormControl(null, Validators.required),
      emergencyContactOnePhone: new FormControl(null, Validators.required),
      emergencyContactTwoPhone: new FormControl(null, Validators.required),
      sailingQualifications: new FormControl(null, Validators.required),
      skills: new FormControl(null, Validators.required),
      sailingExperience: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      password: new FormControl(null, Validators.required)
    });
  }

};

