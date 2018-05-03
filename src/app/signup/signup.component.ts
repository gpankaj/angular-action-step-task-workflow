import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserModel } from './user';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  user = new UserModel();

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  signUp() {
    const val = this.form.value;
    if (val.username && val.password && val.confirm === val.password) {
      this.authService.signup(val.username, val.password)
        .subscribe( () => console.log('User created '),
          console.error

        );
    } else {
      console.log('something wrong in form');
    }
  }
}
