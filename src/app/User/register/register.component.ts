import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  standalone: false,
  selector: 'app-register',
  // imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private user: UsersService,
    private router: Router
  ) {
    this.registerForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')!.value === form.get('confirmPassword')!.value
      ? null
      : { mismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const data = this.registerForm.value;
      const dataPost = {
        username: data.username!,
        password: data.password!,
        email: data.email!,
      };

      this.user.register(dataPost).subscribe({
        next: (res) => {
          console.log('User Created', res);
          // Nếu BE trả token luôn sau khi đăng ký, có thể lưu lại ở đây
          // if (res?.accessToken) {
          //   localStorage.setItem('token', res.accessToken);
          //   localStorage.setItem('user', JSON.stringify(res.user));
          // }
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Register error', err);
          // TODO: show lỗi ra UI (toast, mat-snackbar,...)
        },
      });
    }
  }
}
