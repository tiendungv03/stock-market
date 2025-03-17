import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  NgModule,
} from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Stock } from '../../model/stock';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StockItemBaiTH5Component } from '../../stock/stock-item-baiTH5Services/stock-item-bai-th5/stock-item-bai-th5.component';
import { UpdateStockServiceComponent } from '../../update-stock-service/update-stock-service.component';

@Component({
  standalone: true,
  selector: 'app-bai5-service-stock-list',
  imports: [
    FormsModule,
    CommonModule,
    StockItemBaiTH5Component,
    UpdateStockServiceComponent,
  ],
  templateUrl: './bai5-service-stock-list.component.html',
  styleUrl: './bai5-service-stock-list.component.scss',
})
export class Bai5ServiceStockListComponent implements OnInit {
  public stocks: Stock[] = [];
  public dataIndexItem!: Stock;

  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
    // this.stockService.getStocks().subscribe((data: Stock[]) => {
    //   this.stocks = data;
    // });
    // // console.log(this.stocks);
    // console.log(this.dataIndexItem);
  }

  onGetEventUpdateStock(stock: Stock) {
    this.dataIndexItem = stock;
    console.log('Stock selected for update:', stock);
  }

  OnSearchStock() {
    // const getKeySearch = document.getElementById('Keysearch');
    // let code = getKeySearch?.ariaValueText;
    // console.log(getKeySearch);
  }

  onToggleFavorite(stock: Stock) {
    alert('Favorite for ' + stock + ' was triggered');
    this.stockService.toggleFavorite(stock);
  }
}
