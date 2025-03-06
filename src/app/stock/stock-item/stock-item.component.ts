import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  standalone: true,
  selector: 'app-stock-item',
  imports: [CommonModule],
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.scss',
})
export class StockItemComponent implements OnInit {
  // public name: string = '';
  // public code: string = '';
  // public price: number = 0;
  // public previousPrice: number = 0;
  // public positiveChange: boolean = false;
  // public favorite: boolean = false;

  @Input() stocks: Stock[] = [];

  // public stock: Stock = new Stock('', '', 0, 0, '');
  constructor() {}
  ngOnInit() {
    // this.name = 'Test Stock Company';
    // this.code = 'TSC';
    // this.price = 85;
    // this.previousPrice = 80;
    // this.positiveChange = this.price >= this.previousPrice;
    // this.favorite = false;
    // this.stock = new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ');
  }

  toggleFavorite(index: number) {
    this.stocks[index].favorite = !this.stocks[index].favorite;
    alert('We are toggling the favorite state for this stock');
  }

  // toggleFavorite() {
  //   this.Stock.favorite = !this.Stock.favorite;
  //   alert('We are toggling the favorite state for this stock');
  // }
}
