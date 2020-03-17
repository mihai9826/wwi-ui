import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {CoreModule} from '../../core/core.module';
import {AuthenticationRoutingModule} from './authentication-routing.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CoreModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
