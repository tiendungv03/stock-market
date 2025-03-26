import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';
import { BehaviorSubject, of, Observable, throwError } from 'rxjs';

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
  // getStocks(): Stock[] {
  //   return this.stocks;
  // }

  getStocks(): Observable<Stock[]> {
    return of(this.stocks);
  }

  getStockByCode(code: string): Observable<Stock[]> {
    return of(this.stocks.filter((x) => x.code === code));
  }

  addStock(stock: Stock): Observable<Stock[]> {
    console.log(stock);
    let item = this.stocks.find((x) => x.code === stock.code);
    if (item) {
      return throwError(() => new Error('Stock error'));
    }
    this.stocks.push(stock);

    return of(this.stocks);
  }

  updateStock(stock: Stock): Observable<Stock[]> {
    let item = this.stocks.findIndex((x) => x.code === stock.code);
    console.log(item);
    if (item !== -1) {
      this.stocks[item] = stock;
      // this.stocksSubject.next(this.stocks);
      return of(this.stocks);
    }

    return throwError(() => new Error('Stock error'));
  }

  deleteStock(code: string): Observable<Stock[]> {
    let itemIdex = this.stocks.findIndex((x) => x.code === code);
    if (itemIdex !== -1) {
      this.stocks.splice(itemIdex, 1);
      // this.stocksSubject.next(this.stocks);
      return of(this.stocks);
    }

    return throwError(() => new Error('Stock error delete'));
  }

  toggleFavorite(stock: Stock): Observable<Stock[]> {
    console.log(stock);
    let item = this.stocks.find((x) => x.code === stock.code);
    if (item) {
      item.favorite = !item.favorite;
      return of(this.stocks);
    }

    return throwError(() => new Error('Stock error toggle'));
  }
}
