import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('',  Validators.required),
    password: new FormControl('',  Validators.required),
  });

  constructor(private router: Router,
              private toastr: ToastrService,
              private userService: UserService) { }

  ngOnInit() { }

  onSubmit() {
    this.userService.login(this.loginForm.getRawValue()).subscribe(
      () => {
        this.userService.getCurrentUser().subscribe(
          () => this.router.navigate(['home'])
        );
      },
      _ => this.toastr.error('Wrong email or password', 'Error')
    );
  }

}
