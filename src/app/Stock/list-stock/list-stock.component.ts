import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  NgModule,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { StockService } from '../../services/HttpClient-service-stock.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { ItemStockComponent } from '../item-stock/item-stock.component';

@Component({
  standalone: false,
  selector: 'app-list-stock',
  // imports: [FormsModule, CommonModule, ItemStockComponent],
  templateUrl: './list-stock.component.html',
  styleUrl: './list-stock.component.css',
})
export class ListStockComponent {
  // public stocks: any[] = [];
  public stocks!: Observable<any[]>;
  // public stockList: any;
  // pagedStocks: any[] = []; // Dữ liệu hiện tại hiển thị
  // currentPage: number = 1;
  // pageSize: number = 5;
  // totalPages: number = 0;

  public dataIndexItem!: any;
  Keysearch: any = '';

  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.stockService.getStocks().subscribe((data) => {
      this.stocks = of(data);
      console.log('Stock list:', data);
    });
    // this.stocks = this.stockService.getStocks();
  }

  onGetEventUpdateStock(stock: any) {
    this.dataIndexItem = stock;
    console.log('Stock selected for update:', stock);
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

  goToPage(page: number) {}
}
