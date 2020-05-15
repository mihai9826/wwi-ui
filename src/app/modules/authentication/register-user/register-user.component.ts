import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CreateUserRequest} from '../../../shared/models/auth/create-user-request';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {PasswordMatchValidator} from '../password-match.validator';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  get fullName() { return this.registerUserForm.get('fullName'); }
  get email() { return this.registerUserForm.get('email'); }
  get deliveryAddress() { return this.registerUserForm.get('deliveryAddress'); }
  get phoneNumber() { return this.registerUserForm.get('phoneNumber'); }
  get password() { return this.registerUserForm.get('password'); }
  get reenteredPassword() { return this.registerUserForm.get('reenteredPassword'); }

  registerUserForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('',  [Validators.required, Validators.email]),
    deliveryAddress: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    reenteredPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
  }, {validators: PasswordMatchValidator.passwordMatchValidator});

  faPaperPlane = faPaperPlane;

  constructor(private userService: UserService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const controls = this.registerUserForm.controls;

    const createUserRequest = new CreateUserRequest( {
      fullName: controls.fullName.value,
      emailAddress: controls.email.value,
      deliveryAddress: controls.deliveryAddress.value,
      phoneNumber: controls.phoneNumber.value,
      password: controls.password.value,
      role: 'CLIENT'
    });

    this.userService.registerUser(createUserRequest).subscribe(
      () => this.router.navigate(['home'])
        .then(_ => this.toastr.success('Successful registration', 'OK')),
      error => {
          if (error.error.message.includes('User with this email')) {
            this.toastr.warning('Email is already taken', 'Warning');
          }
      }
    );
  }

}
