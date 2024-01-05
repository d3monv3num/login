import { Routes } from '@angular/router';
import { SignupComponent } from './user-auth/signup/signup.component';
import { LoginComponent } from './user-auth/login/login.component';
export const routes: Routes = [
    {'path':'signup',component:SignupComponent},
    {'path':'login',component:LoginComponent},
    {'path':'',redirectTo:'login', pathMatch:'full'}
];
