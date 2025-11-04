import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  // private rest_Api_Server = 'https://localhost:7135/api';
  private rest_Api_Server = 'http://localhost:3000/api';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private stocksSubject = new Subject<any>();
  // private stocksSubject = new BehaviorSubject<Stock[]>(this.stocks);

  constructor(private http: HttpClient) {}

  public getStocks(): Observable<any> {
    const url = `${this.rest_Api_Server}/stocks`;
    return this.http.get<any>(url, this.httpOptions);
  }

  public getStockByCode(_id: any): Observable<any> {
    const url = `${this.rest_Api_Server}/stocks/${_id}`;
    console.log('Get Stock by code URL:', url);
    return this.http.get<any>(url, this.httpOptions);
  }

  public post(data: any): Observable<any> {
    const url = `${this.rest_Api_Server}/stocks`;
    return this.http.post<any>(url, data, this.httpOptions);
  }

  public put(id: any, data: any): Observable<any> {
    console.log('Stock data', data);
    const url = `${this.rest_Api_Server}/stocks/${id}`;
    console.log('Stock Updated', url);
    return this.http.put<any>(url, data, this.httpOptions);
  }

  public delete(ID: any): Observable<any> {
    console.log('Stock Deleted', ID);
    const url = `${this.rest_Api_Server}/stocks/${ID}`;
    console.log(url);
    return this.http.delete<any>(url, this.httpOptions);
  }

  public toggleFavorite(data: any): Observable<any> {
    data.favorite = !data.favorite;
    // console.log('Stock favorite', data);
    const url = `${this.rest_Api_Server}/stocks/${data._id}`;
    console.log('Stock Updated', url);
    return this.http.put<any>(url, data, this.httpOptions);
  }

  public isPositiveChange(stock: any): boolean {
    return stock.price >= stock.previousPrice;
  }

  public loadNext(data: any) {
    this.stocksSubject.next(data);
    return this.stocksSubject.asObservable();
  }
}
