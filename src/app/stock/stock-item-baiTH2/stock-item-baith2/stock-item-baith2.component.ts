import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { Stock } from '../../../model/stock';

@Component({
  selector: 'app-stock-item-baith2',
  imports: [],
  templateUrl: './stock-item-baith2.component.html',
  styleUrl: './stock-item-baith2.component.scss',
})
export class StockItemBaith2Component {
  public name: string = '';
  public code: string = '';
  public price: number = 0;
  public previousPrice: number = 0;
  public positiveChange: boolean = false;
  public favorite: boolean = false;

  public stock: Stock = new Stock('', '', 0, 0, '');
  constructor() {}
  ngOnInit() {
    this.name = 'Test Stock Company';
    this.code = 'TSC';
    this.price = 85;
    this.previousPrice = 80;
    this.positiveChange = this.price >= this.previousPrice;
    this.favorite = false;
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ');
  }

  toggleFavorite(stock: Stock) {
    this.stock.favorite = !this.stock.favorite;
    alert('We are toggling the favorite state for this stock');
  }
}
