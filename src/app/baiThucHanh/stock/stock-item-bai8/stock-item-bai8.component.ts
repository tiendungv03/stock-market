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
import { StockService } from '../../../services/HttpClient-service-stock.service';
import { Subject } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { UpdateStockBai8Component } from '../../Update-stock/update-stock-bai8/update-stock-bai8.component';

@Component({
  selector: 'app-stock-item-bai8',
  imports: [CommonModule, RouterModule, UpdateStockBai8Component],
  templateUrl: './stock-item-bai8.component.html',
  styleUrl: './stock-item-bai8.component.scss',
})
export class StockItemBai8Component {
  @ViewChild('myDialog') dialogUpdate!: ElementRef<HTMLDialogElement>;
  @Input() stock!: any;
  public stockIndex!: any;

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
    // console.log('Stock Deleted', code);
    this.stockService.delete(stock.id).subscribe((response) => {
      console.log('Stock Deleted', response);
    });
    this.stockService.loadNext(stock);
  }

  OnUpdateStock(stock: any) {
    console.log('Stock Updated', this.stockIndex);
    this.stockIndex = stock;
    this.dialogUpdate.nativeElement.showModal();
  }

  closeDialog() {
    this.dialogUpdate.nativeElement.close();
  }
}
