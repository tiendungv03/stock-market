import { Routes } from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './User/register/register.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { CreateStockBai8Component } from './create-stock/create-stock-bai8/create-stock-bai8.component';
import { BaiTH8RoutingComponent } from './stockList/bai-th8-routing/bai-th8-routing.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'stocks/list', component: BaiTH8RoutingComponent },
  { path: 'stock/create', component: CreateStockBai8Component },
  { path: 'stock/:code', component: StockDetailsComponent },
  { path: '**', redirectTo: '/register' }, // Trang lỗi 404
];
