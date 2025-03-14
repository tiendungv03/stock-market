import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { Stock } from './model/stock';
import { CreateStockBaiTH3Component } from './create-stock/baiTH3/create-stock-bai-th3/create-stock-bai-th3.component';
import { CreateStockComponent } from './create-stock/baiTH4/create-stock.component';
import { StockItemBaith2Component } from './stock/stock-item-baiTH2/stock-item-baith2/stock-item-baith2.component';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'stock-market';
  public stockList: Stock[] = [
    new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ', false),
    new Stock('Apple', 'AAPL', 150, 145, 'NASDAQ', false),
    new Stock('Google', 'GOOGL', 2600, 2750, 'NASDAQ', false),
  ];

  addStock(stock: Stock) {
    this.stockList.push(
      new Stock(
        stock.name,
        stock.code,
        stock.price,
        stock.previousPrice,
        stock.exchange,
        stock.favorite
      )
    );
    console.log(this.stockList);
  }
}
