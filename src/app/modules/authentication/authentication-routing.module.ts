import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterUserComponent} from './register-user/register-user.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {EmailSentComponent} from './email-sent/email-sent.component';
import {ForgotPasswordConfirmationComponent} from './forgot-password-confirmation/forgot-password-confirmation.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterUserComponent
  },
  {
    path: 'email-sent',
    component: EmailSentComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'reset-password',
    component: ForgotPasswordConfirmationComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
