import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';
import { CreateStockComponent } from './Stock/create-stock/create-stock.component';
import { DetailsStockComponent } from './Stock/details-stock/details-stock.component';
import { ListStockComponent } from './Stock/list-stock/list-stock.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'stocks/list', component: ListStockComponent },
  { path: 'stock/create', component: CreateStockComponent },
  { path: 'stock/:code', component: DetailsStockComponent },
  { path: '**', redirectTo: '/register' }, // Trang lỗi 404
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
