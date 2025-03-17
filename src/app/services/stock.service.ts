import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private stocks: Stock[] = [];

  // private stocksSubject = new BehaviorSubject<Stock[]>(this.stocks);

  constructor() {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ'),
      new Stock('Bitcoin', 'BTC', 82000, 90000, 'Binance'),
      new Stock('Ethereum', 'ETH', 1950, 2400, 'Binance'),
      new Stock('MemeCoin', 'MC', 780, 100, 'BingX'),
      new Stock('Pi Network', 'Pi', 0.00000101, 3, 'Okx'),
    ];

    // this.stocksSubject.next(this.stocks);
  }
  getStocks(): Stock[] {
    return this.stocks;
  }

  // getStocks(): Observable<Stock[]> {
  //   return this.stocksSubject.asObservable();
  // }

  getStockByCode(code: string): Stock | undefined {
    return this.stocks.find((x) => x.code === code);
  }

  addStock(stock: Stock) {
    console.log(stock);
    let item = this.stocks.find((x) => x.code === stock.code);
    if (item) {
      return false;
    }
    this.stocks.push(stock);
    // this.stocksSubject.next(this.stocks); // tự động cập nhật đến các component
    return true;
  }

  updateStock(stock: Stock) {
    let item = this.stocks.findIndex((x) => x.code === stock.code);
    console.log(item);
    if (item !== -1) {
      this.stocks[item] = stock;
      // this.stocksSubject.next(this.stocks);
      return true;
    }

    return false;
  }

  deleteStock(code: string) {
    let itemIdex = this.stocks.findIndex((x) => x.code === code);
    if (itemIdex !== -1) {
      this.stocks.splice(itemIdex, 1);
      // this.stocksSubject.next(this.stocks);
      return true;
    }

    return false;
  }

  toggleFavorite(stock: Stock) {
    console.log(stock);
    let item = this.stocks.find((x) => x.code === stock.code);
    if (item) {
      item.favorite = !item.favorite;
    }
  }
}
