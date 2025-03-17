import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Stock } from '../../../model/stock';
import { CommonModule } from '@angular/common';
import { StockService } from '../../../services/stock.service';

@Component({
  standalone: true,
  selector: 'app-stock-item-bai-th5',
  imports: [CommonModule],
  templateUrl: './stock-item-bai-th5.component.html',
  styleUrl: './stock-item-bai-th5.component.scss',
})
export class StockItemBaiTH5Component implements OnInit {
  @Input() stock!: Stock;
  @Output() stockIndex = new EventEmitter<Stock>();

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
    this.stockIndex.emit(stock);
    // console.log(this.stockIndex);
  }
}
