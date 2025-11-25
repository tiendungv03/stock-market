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
import { ItemStockComponent } from '../item-stock/item-stock.component';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap, startWith } from 'rxjs/operators';

@Component({
  standalone: false,
  selector: 'app-list-stock',
  // imports: [FormsModule, CommonModule, ItemStockComponent],
  templateUrl: './list-stock.component.html',
  styleUrl: './list-stock.component.css',
})
export class ListStockComponent {
  // public stocks: any[] = [];
  // public stocks$!: Observable<any[]>;
  // public stockList: any;
  // pagedStocks: any[] = []; // Dữ liệu hiện tại hiển thị
  // currentPage: number = 1;
  // pageSize: number = 5;
  // totalPages: number = 0;

  public dataIndexItem!: any;
  Keysearch: any = '';

  private refresh$ = new BehaviorSubject<void>(undefined);

  // mặc định load tất cả
  stocks$: Observable<any[]> = this.refresh$.pipe(
    switchMap(() => this.stockService.getStocks()),
    map((res: any) => res?.data ?? []),
    startWith([])
  );

  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.refresh$.next(); // nạp lần đầu
  }

  onGetEventUpdateStock(stock: any) {
    this.dataIndexItem = stock;
    console.log('Stock selected for update:', stock);
  }

  OnSearchStock() {
    const q = this.Keysearch.trim();
    if (!q) {
      this.refresh$.next(); // về danh sách đầy đủ
      return;
    }
    // server-side: nếu có API getByCode trả về 1 item
    this.stocks$ = this.stockService
      .getStockByCode(q)
      .pipe(map((item: any) => (item ? [item] : [])));

    // hoặc client-side filter:
    // this.stocks$ = this.stockService.getStocks().pipe(
    //   map((res: any) => (res?.data ?? []).filter((x: any) => x.code === q))
    // );
  }

  // callback sau khi con xoá
  onDeleted(_id: string) {
    console.log('Deleted id:', _id);
    this.refresh$.next(); // re-fetch để UI cập nhật
  }

  // tuỳ chọn: nếu muốn re-fetch khi toggle fav
  onToggledFav(_id: string) {
    this.refresh$.next();
  }

  goToPage(page: number) {}

  onUpdated(_item: any) {
    this.refresh$.next(); // re-fetch sau khi PUT thành công
  }

  // trackBy để UI mượt
  trackById = (_: number, s: any) => s._id ?? s.id;
}
