import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });
  constructor(private userService: UserService,
              private toastrService: ToastrService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.createPasswordToken(this.forgotPasswordForm.getRawValue()).subscribe(
      () => this.router.navigate(['auth', 'email-sent']),
      err => {
        if (err.status === 404) {
          this.toastrService.error('No user found with provided email',
            'Email');
        } else if (err.status === 409) {
          this.toastrService.error('A reset email was already sent',
            'Error');
        } else {
          this.toastrService.error('Internal Server Error', 'Internal Server Error');
        }
      }
    );
  }

}
