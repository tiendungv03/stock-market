import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { routes } from '../../app.routes';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  dataTemp: any[] = [];
  loginData = {
    username: '',
    password: '',
  };
  constructor(private users: UsersService, private router: Router) {}
  ngOnInit(): void {
    this.users.getUsers().subscribe((users: any[]) => {
      this.dataTemp = users;
    });
  }
  onSubmit() {
    // console.log('Thông tin đăng nhập:', this.loginData, this.dataTemp);
    const username = this.loginData.username;
    const password = this.loginData.password;

    if (username !== '' && password !== '') {
      const item = this.dataTemp.findIndex(
        (data: any) => username === data.username && password === data.password
      );

      if (item != -1) {
        // alert('Login succes');
        this.router.navigate(['/stocks/list']);
      } else {
        // alert('login error');
        this.router.navigate(['/register']);
      }
    }
  }
=======

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginData = { username: '', password: '' };

  constructor(private users: UsersService, private router: Router) {}

  onSubmit() {
    const { username, password } = this.loginData;
    this.users.login(username, password).subscribe({
      next: (res) => {
        if (res?.accessToken) this.router.navigate(['/stocks/list']);
        else this.router.navigate(['/register']);
      },
      error: () => this.router.navigate(['/register']),
    });
  }

  // // dataTemp: any[] = [];
  // loginData = {
  //   username: '',
  //   password: '',
  // };
  // constructor(private users: UsersService, private router: Router) {}
  // ngOnInit(): void {
  //   // this.users.getUsers().subscribe((users: any[]) => {
  //   //   this.dataTemp = users;
  //   // });
  // }
  // onSubmit() {
  //   // console.log('Thông tin đăng nhập:', this.loginData, this.dataTemp);
  //   //   const username = this.loginData.username;
  //   //   const password = this.loginData.password;

  //   //   if (username !== '' && password !== '') {
  //   //     const item = this.dataTemp.findIndex(
  //   //       (data: any) => username === data.username && password === data.password
  //   //     );

  //   //     if (item != -1) {
  //   //       // alert('Login succes');
  //   //       this.router.navigate(['/stocks/list']);
  //   //     } else {
  //   //       // alert('login error');
  //   //       this.router.navigate(['/register']);
  //   //     }
  //   //   }

  //   this.users
  //     .login(this.loginData.username, this.loginData.password)
  //     .subscribe(
  //       (response) => {
  //         if (response && response.message === 'Login successful') {
  //           console.log('Login success');
  //           this.router.navigate(['/stocks/list']);
  //         } else {
  //           console.log('Login error');
  //           this.router.navigate(['/register']);
  //         }
  //       },
  //       (error) => {
  //         console.error('Login error:', error);
  //         // console('Login error');
  //         this.router.navigate(['/register']);
  //       }
  //     );
  // }
>>>>>>> module
}
