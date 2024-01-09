import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignupComponent,ReactiveFormsModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent{
  fb = new FormBuilder();
  signupForm = this.fb.group({
    businessName: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNumber: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    agreeTerms: new FormControl(false, Validators.requiredTrue),
  });

  onSubmit = () => {
    if (this.signupForm.valid) {
      // Implement your signup logic here
      console.log('Form submitted:', this.signupForm.value);
    }
  };
}

