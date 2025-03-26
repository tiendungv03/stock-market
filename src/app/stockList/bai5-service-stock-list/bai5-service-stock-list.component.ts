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
import { UpdateStockServiceComponent } from '../../Update-stock/update-stock-service/update-stock-service.component';
import { Observable } from 'rxjs';
@Component({
  standalone: true,
  selector: 'app-bai5-service-stock-list',
  imports: [FormsModule, CommonModule, StockItemBaiTH5Component],
  templateUrl: './bai5-service-stock-list.component.html',
  styleUrl: './bai5-service-stock-list.component.scss',
})
export class Bai5ServiceStockListComponent implements OnInit {
  public stocks!: Observable<Stock[]>;
  // public listOutputStock: Stock[] = [];
  public dataIndexItem!: Stock;
  Keysearch: string = '';

  constructor(private stockService: StockService) {}

  ngOnInit() {
    // this.stocks = this.stockService.getStocks();
    // this.stockService.getStocks().subscribe((data: Stock[]) => {
    //   this.stocks = data;
    // });
    // // console.log(this.stocks);
    // console.log(this.dataIndexItem);
    this.stocks = this.stockService.getStocks();
  }

  onGetEventUpdateStock(stock: Stock) {
    this.dataIndexItem = stock;
    console.log('Stock selected for update:', stock);
  }

  onToggleFavorite(stock: Stock) {
    // alert('Favorite for ' + stock + ' was triggered');
    // this.stockService.toggleFavorite(stock);
  }

  OnSearchStock() {
    if (this.Keysearch == '') {
      this.stocks = this.stockService.getStocks();
    } else {
      this.stocks = this.stockService.getStockByCode(this.Keysearch);
    }
  }
}
