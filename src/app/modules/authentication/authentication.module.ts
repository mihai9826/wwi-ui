import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {CoreModule} from '../../core/core.module';
import {AuthenticationRoutingModule} from './authentication-routing.module';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EmailSentComponent } from './email-sent/email-sent.component';
import { ForgotPasswordConfirmationComponent } from './forgot-password-confirmation/forgot-password-confirmation.component';



@NgModule({
  declarations: [LoginComponent, RegisterUserComponent, ForgotPasswordComponent, EmailSentComponent, ForgotPasswordConfirmationComponent],
  imports: [
    CoreModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
