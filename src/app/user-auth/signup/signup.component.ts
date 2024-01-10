import { Component} from '@angular/core';
import { FormBuilder, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LowerCasePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignupComponent,ReactiveFormsModule,RouterLink,LowerCasePipe],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent{
  fb = new FormBuilder();
  signupForm = this.fb.group({
    businessName: new FormControl('', Validators.required),
    userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]+$')]),//custom validators for username only containing numbers and letters and one currency symbol
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNumber: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    agreeTerms: new FormControl(false, Validators.requiredTrue),
  });

  onSubmit = () => {
    if (this.signupForm.valid) {
      // Signup Form implementation and requests 
      console.log('Form submitted:', this.signupForm.value);
    }
  };
}

