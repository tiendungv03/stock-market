import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  NgModule,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { StockService } from '../../HttpClient-service/stock.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { StockItemBai8Component } from '../../stock/stock-item-bai8/stock-item-bai8.component';

@Component({
  selector: 'app-bai-th8-routing',
  imports: [FormsModule, CommonModule, StockItemBai8Component],
  templateUrl: './bai-th8-routing.component.html',
  styleUrl: './bai-th8-routing.component.scss',
})
export class BaiTH8RoutingComponent {
  // public stocks: any[] = [];
  public stocks!: Observable<any[]>;
  // public stockList: any;

  public dataIndexItem!: any;
  Keysearch: any = '';

  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.stockService.getStocks().subscribe((data) => {
      this.stocks = of(data);
    });
    // this.stocks = this.stockService.getStocks();
  }

  onGetEventUpdateStock(stock: any) {
    this.dataIndexItem = stock;
    // console.log('Stock selected for update:', stock);
  }

  OnSearchStock() {
    if (this.Keysearch == '') {
      this.stocks = this.stockService.getStocks();
    } else {
      this.stocks.subscribe((stocks) => {
        const tempID = stocks.find(
          (stock: any) => stock.code == this.Keysearch
        )?.id;
        console.log('id ', tempID);
        if (tempID) {
          this.stockService.getStockByCode(tempID).subscribe((data) => {
            this.stocks = of([data]);
          });
        } else {
          alert('Stock not found!');
        }
      });
    }
  }
}
