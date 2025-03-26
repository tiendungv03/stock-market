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
import { StockService } from '../../HttpClient-service/stock.service';
import { Subject } from 'rxjs';
import { UpdateStockApiComponent } from '../../Update-stock/update-stock-api/update-stock-api.component';

@Component({
  selector: 'app-stock-item-api',
  imports: [CommonModule, UpdateStockApiComponent],
  templateUrl: './stock-item-api.component.html',
  styleUrl: './stock-item-api.component.scss',
})
export class StockItemApiComponent {
  @ViewChild('myDialog') dialogUpdate!: ElementRef<HTMLDialogElement>;
  @Input() stock!: any;
  public stockIndex!: any;

  constructor(private stockService: StockService) {}
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
