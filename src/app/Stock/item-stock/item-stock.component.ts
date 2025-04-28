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
  @Output() stockIndex = new EventEmitter<any>();

  constructor(private stockService: StockService, private router: Router) {}
  ngOnInit() {}

  isPositiveChange(stock: any): boolean {
    return this.stockService.isPositiveChange(stock);
  }
  onToggleFavorite(stock: any) {
    this.stockService.toggleFavorite(stock).subscribe((response) => {
      console.log('Stock favorite', response);
    });
  }

  OnDeleteStock(stock: any) {
    console.log('Stock Deleted', stock);
    this.stockService.delete(stock._id).subscribe((response) => {
      console.log('Stock Deleted', response);
    });
    // this.stockService.loadNext(stock);
  }

  OnUpdateStock(stock: any) {
    console.log('Stock Updated', this.stockIndex);
    this.stockIndex = stock;
    this.dialogUpdate.nativeElement.showModal();
  }

  closeDialog() {
    this.dialogUpdate.nativeElement.close();
  }

  goToDetail(code: string) {
    this.router.navigate(['/stock', code]);
  }
}
