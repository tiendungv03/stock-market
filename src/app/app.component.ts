import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { Stock } from './model/stock';
import { CreateStockBaiTH3Component } from './create-stock/baiTH3/create-stock-bai-th3/create-stock-bai-th3.component';
import { CreateStockComponent } from './create-stock/baiTH4/create-stock.component';
import { StockItemBaith2Component } from './stock/stock-item-baiTH2/stock-item-baith2/stock-item-baith2.component';
import { Bai5ServiceStockListComponent } from './stockList/bai5-service-stock-list/bai5-service-stock-list.component';
import { CreateStockServiceComponent } from './create-stock/baiTH5/create-stock-service/create-stock-service.component';
import { APIStockListComponent } from './stockList/baiTH6_API/api-stock-list.component';
import { CreateStockApiComponent } from './create-stock/baiTH6_API/create-stock-api/create-stock-api.component';

@Component({
  standalone: true,
  selector: 'app-root',
  // imports: [CreateStockComponent],
  imports: [Bai5ServiceStockListComponent, CreateStockServiceComponent],
  // imports: [APIStockListComponent, CreateStockApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'stock-market';
}
