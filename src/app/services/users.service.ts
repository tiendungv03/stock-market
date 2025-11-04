import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private rest_Api_Server = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  // Token hiện tại
  get token(): string | null {
    return localStorage.getItem('token');
  }

  // JSON headers
  private get httpOptions() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  // JSON + Bearer (dùng cho endpoint cần token)
  private get httpOptionsAuth() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const t = this.token;
    if (t) headers = headers.set('Authorization', `Bearer ${t}`);
    return { headers };
  }

  // ===== Auth =====
  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(
        `${this.rest_Api_Server}/auth/login`,
        { username, password },
        this.httpOptions
      )
      .pipe(
        tap((res) => {
          if (res?.accessToken) {
            localStorage.setItem('token', res.accessToken);
            localStorage.setItem('user', JSON.stringify(res.user));
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  public getUsers(): Observable<any> {
    const url = `${this.rest_Api_Server}/users`;
    return this.http.get<any>(url, this.httpOptions);
  }

  public getUserByCode(ID: any): Observable<any> {
    const url = `${this.rest_Api_Server}/users/${ID}`;
    return this.http.get<any>(url, this.httpOptions);
  }

  public loginUser(username: any, password: any): Observable<any> {
    const url = `${this.rest_Api_Server}/users/login`;
    return this.http.post<any>(url, { username, password }, this.httpOptions);
  }

  public postUser(data: any): Observable<any> {
    const url = `${this.rest_Api_Server}/users/register`;
    return this.http.post<any>(url, data, this.httpOptions);
  }

  public putUser(data: any): Observable<any> {
    console.log('Stock data', data);
    const url = `${this.rest_Api_Server}/users/${data.id}`;
    console.log('Stock Updated', url);
    return this.http.put<any>(url, data, this.httpOptions);
  }

  public deleteUser(ID: any): Observable<any> {
    console.log('users Deleted', ID);
    const url = `${this.rest_Api_Server}/users/${ID}`;
    console.log(url);
    return this.http.delete<any>(url, this.httpOptions);
  }
}
