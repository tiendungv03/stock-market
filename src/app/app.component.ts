import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import { StockItemComponent } from './baiThucHanh/stock/stock-item/stock-item.component';
import { Stock } from './model/stock';
import { CreateStockBaiTH3Component } from './baiThucHanh/create-stock/baiTH3/create-stock-bai-th3/create-stock-bai-th3.component';
import { CreateStockComponent } from './baiThucHanh/create-stock/baiTH4/create-stock.component';
import { StockItemBaith2Component } from './baiThucHanh/stock/stock-item-baiTH2/stock-item-baith2/stock-item-baith2.component';
import { Bai5ServiceStockListComponent } from './baiThucHanh/stockList/bai5-service-stock-list/bai5-service-stock-list.component';
import { CreateStockServiceComponent } from './baiThucHanh/create-stock/baiTH5/create-stock-service/create-stock-service.component';
import { APIStockListComponent } from './baiThucHanh/stockList/baiTH6_API/api-stock-list.component';
import { CreateStockApiComponent } from './baiThucHanh/create-stock/baiTH6_API/create-stock-api/create-stock-api.component';

@Component({
  standalone: true,
  selector: 'app-root',
  // imports: [CreateStockComponent],
  // imports: [Bai5ServiceStockListComponent, CreateStockServiceComponent],
  // imports: [APIStockListComponent, CreateStockApiComponent],
  imports: [RouterOutlet, RouterLink, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
=======
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
>>>>>>> module
})
export class AppComponent {
  title = 'stock-market';
}
