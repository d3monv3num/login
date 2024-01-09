import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder,FormControl,Validators,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  fb=new FormBuilder();
  loginForm=this.fb.group({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required])
  })
  onSubmit=()=>{
    if(this.loginForm.valid){
      // login form implmentation and requests
      console.log('Form submitted:',this.loginForm.value);
    }
  }
}
