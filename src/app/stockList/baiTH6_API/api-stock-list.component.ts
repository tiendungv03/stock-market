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
import { UpdateStockApiComponent } from '../../Update-stock/update-stock-api/update-stock-api.component';
import { StockItemApiComponent } from '../../stock/stock-item-api/stock-item-api.component';
import { Observable, of } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-api-stock-list',
  imports: [FormsModule, CommonModule, StockItemApiComponent],
  templateUrl: './api-stock-list.component.html',
  styleUrl: './api-stock-list.component.scss',
})
export class APIStockListComponent implements OnInit {
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
  }

  onGetEventUpdateStock(stock: any) {
    this.dataIndexItem = stock;
    // console.log('Stock selected for update:', stock);
  }

  OnSearchStock() {
    // if (this.Keysearch !== '') {
    //   this.stockList = [];
    //   this.stocks.subscribe((data: any[]) => {
    //     const item = data.find((item) => item.code === this.Keysearch);
    //     if (item) {
    //       console.log('Stock search:', item.id);
    //       this.stockList = [item];
    //     }
    //   });
    //   console.log('Stock search:', this.stockList);
    // } else {
    //   this.stocks.subscribe((data) => {
    //     this.stockList = [...data];
    //   });
    // }
  }
}
