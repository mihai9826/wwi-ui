import { Component, OnInit } from '@angular/core';
import {UserService} from '../../authentication/service/user.service';
import {ToastrService} from 'ngx-toastr';
import {UserPrincipal} from '../../../shared/models/auth/user-principal';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EditUserRequest} from '../../../shared/models/auth/edit-user-request';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  currentUser: UserPrincipal;
  editUserDataForm = new FormGroup({
    fullName: new FormControl(),
    emailAddress: new FormControl(),
    deliveryAddress: new FormControl(),
    phoneNumber: new FormControl(),
    password: new FormControl()
  });
  constructor(private userService: UserService,
              private toastrService: ToastrService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(data => {
      this.currentUser = data;
      this.editUserDataForm = this.formBuilder.group({
        fullName: this.formBuilder.control(this.currentUser.theUser.fullName, Validators.required),
        emailAddress: this.formBuilder.control(this.currentUser.theUser.emailAddress, Validators.required),
        deliveryAddress: this.formBuilder.control(this.currentUser.theUser.deliveryAddress, Validators.required),
        phoneNumber: this.formBuilder.control(this.currentUser.theUser.phoneNumber, Validators.required),
        password: this.formBuilder.control('', Validators.required)
      });
    });
  }

  onSubmit() {
    const formControls = this.editUserDataForm.getRawValue();
    const updatedData = new EditUserRequest({
      fullName: formControls.fullName,
      emailAddress: formControls.emailAddress,
      deliveryAddress: formControls.deliveryAddress,
      phoneNumber: formControls.phoneNumber,
      password: formControls.password
    });
    this.userService.editUserData(this.currentUser.theUser.personId, updatedData).subscribe(
      () => this.router.navigate(['home']).then(_ => this.toastrService.success('Updated data', 'Success'))
    );
  }
}
