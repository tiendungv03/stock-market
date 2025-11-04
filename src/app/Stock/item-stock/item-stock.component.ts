import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StockService } from '../../services/HttpClient-service-stock.service';
import { Subject } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { UpdateStockComponent } from '../update-stock/update-stock.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
@Component({
  standalone: false,
  selector: 'app-item-stock',
  // imports: [
  //   CommonModule,
  //   RouterModule,
  //   UpdateStockComponent,
  //   MatCardModule,
  //   MatButtonModule,
  //   MatListModule,
  //   MatFormFieldModule,
  //   MatInputModule,
  //   MatDialogModule,
  //   MatIconModule,
  // ],
  templateUrl: './item-stock.component.html',
  styleUrl: './item-stock.component.css',
})
export class ItemStockComponent {
  @ViewChild('myDialog') dialogUpdate!: ElementRef<HTMLDialogElement>;
  @Input() stock!: any;

  @Output() editRequested = new EventEmitter<any>();
  @Output() deleted = new EventEmitter<string>();
  @Output() toggledFav = new EventEmitter<string>();
  @Output() updated = new EventEmitter<any>();

  // thêm state để truyền cho form update
  selectedStock: any = null;

  constructor(private stockService: StockService, private router: Router) {}

  isPositiveChange(stock: any): boolean {
    return this.stockService.isPositiveChange(stock);
  }

  onToggleFavorite(stock: any) {
    this.stockService.toggleFavorite(stock).subscribe({
      next: (res) => {
        console.log('Stock favorite', res);
        this.toggledFav.emit(stock._id); // báo cho cha
      },
      error: (e) => console.error(e),
    });
  }

  OnDeleteStock(stock: any) {
    this.stockService.delete(stock._id).subscribe({
      next: (res) => {
        console.log('Stock Deleted', res);
        this.deleted.emit(stock._id); // báo cho cha để refresh
      },
      error: (e) => console.error(e),
    });
  }

  OnUpdateStock(stock: any) {
    this.selectedStock = stock; // set bản ghi đang sửa
    this.editRequested.emit(stock); // (tuỳ chọn) báo lên cha
    this.dialogUpdate?.nativeElement?.showModal();
  }

  // nhận sự kiện từ form con và bubble lên cha
  onChildUpdated(updatedItem: any) {
    this.updated.emit(updatedItem); // báo cho cha để refresh
    this.closeDialog();
  }

  closeDialog() {
    this.dialogUpdate?.nativeElement?.close();
  }

  goToDetail(code: string) {
    this.router.navigate(['/stock', code]);
  }
}
