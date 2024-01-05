import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SignupComponent,
    LoginComponent,
    NavbarComponent
  ],
  exports:[
    SignupComponent,
    LoginComponent
  ]
})
export class UserAuthModule { }
