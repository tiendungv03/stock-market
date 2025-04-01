import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Chuyển hướng trang chính đến /login
  { path: 'login', component: LoginComponent },
  //   { path: '**', component:  }, // Trang lỗi 404
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  //   exports: [RouterModule],
})
export class AppRoutingModule {}
