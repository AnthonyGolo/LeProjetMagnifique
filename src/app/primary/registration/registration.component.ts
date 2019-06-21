import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginDataService } from '../login-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  registrationForm = new FormGroup({
    name: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern(/^[a-z ,.'-]+$/i)
    ])),
    phone: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){9,12}(\s*)?$/)
    ])),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern(/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/)
    ])),
    password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(8)
    ])),
  });
  
  constructor(private data: LoginDataService, private router: Router) {
    this.registrationForm.addControl('passwordConfirmation', new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(8),
      this.validateAreEqual.bind(this)
    ])))
  }

  validateAreEqual(fieldControl: FormControl) {
    return fieldControl.value === this.registrationForm.get("password").value ? null : {
        NotEqual: true
    };
  }

  ngOnInit() {
    
  }

  onSubmit() {
    this.data.register(this.registrationForm.value)
      .subscribe(() => {});
    this.router.navigateByUrl('primary/login/error');
  }

}
