import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {UserService} from '../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PasswordMatchValidator} from '../password-match.validator';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password-confirmation',
  templateUrl: './forgot-password-confirmation.component.html',
  styleUrls: ['./forgot-password-confirmation.component.css']
})
export class ForgotPasswordConfirmationComponent implements OnInit {
  get password() {
    return this.resetPasswordForm.get('password');
  }

  resetPasswordForm = new FormGroup({
    password: new FormControl('', Validators.minLength(6)),
    reenteredPassword: new FormControl('', Validators.required),
  }, {validators: PasswordMatchValidator.passwordMatchValidator});

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private toastrService: ToastrService,
              private userService: UserService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const token = this.activatedRoute.snapshot.queryParamMap.get('token');
    this.userService.confirmPasswordReset(this.resetPasswordForm.getRawValue(), token).subscribe(
      () => this.router.navigate(['auth', 'login']).then(_ => this.toastrService.success('reset complete',
        'Password'))
    );
  }

}
