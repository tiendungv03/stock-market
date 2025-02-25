import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { CreateStockComponent } from './create-stock/create-stock.component';

@Component({
  selector: 'app-root',
  imports: [StockItemComponent, CreateStockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'stock-market';
  stockList: any[] = []; // Danh sách cổ phiếu

  addStock(stock: any) {
    this.stockList.push(stock); // Thêm cổ phiếu vào danh sách
    console.log(this.stockList);
  }
}
