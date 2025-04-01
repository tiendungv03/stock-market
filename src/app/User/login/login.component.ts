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
}
