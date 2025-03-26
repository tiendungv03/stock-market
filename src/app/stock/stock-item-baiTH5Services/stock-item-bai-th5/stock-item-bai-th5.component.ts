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
import { Stock } from '../../../model/stock';
import { CommonModule } from '@angular/common';
import { StockService } from '../../../services/stock.service';
import { UpdateStockServiceComponent } from '../../../Update-stock/update-stock-service/update-stock-service.component';

@Component({
  standalone: true,
  selector: 'app-stock-item-bai-th5',
  imports: [CommonModule, UpdateStockServiceComponent],
  templateUrl: './stock-item-bai-th5.component.html',
  styleUrl: './stock-item-bai-th5.component.scss',
})
export class StockItemBaiTH5Component implements OnInit {
  @ViewChild('myDialog') dialogUpdate!: ElementRef<HTMLDialogElement>;
  public stockIndex!: any;
  @Input() stock!: Stock;
  // @Output() stockIndex = new EventEmitter<Stock>();

  constructor(private stockService: StockService) {}
  ngOnInit() {}
  onToggleFavorite(stock: Stock) {
    this.stockService.toggleFavorite(stock);
  }

  OnDeleteStock(code: string) {
    this.stockService.deleteStock(code);
  }

  OnUpdateStock(stock: Stock) {
    // console.log(stock);
    this.stockIndex = stock;
    this.dialogUpdate.nativeElement.showModal();
    // console.log(this.stockIndex);
  }

  closeDialog() {
    this.dialogUpdate.nativeElement.close();
  }
}
