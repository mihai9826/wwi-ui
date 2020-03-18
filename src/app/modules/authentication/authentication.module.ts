import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {CoreModule} from '../../core/core.module';
import {AuthenticationRoutingModule} from './authentication-routing.module';
import { RegisterUserComponent } from './register-user/register-user.component';



@NgModule({
  declarations: [LoginComponent, RegisterUserComponent],
  imports: [
    CoreModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
