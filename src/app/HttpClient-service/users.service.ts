import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { get } from 'http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private rest_Api_Server = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  // login(username: string, password: string): Observable<any> {
  //   return this.http.get<any[]>(`${this.apiUrl}?username=${username}&password=${password}`).pipe(
  //     map(users => users.length > 0 ? users[0] : null) // Kiểm tra có user không
  //   );
  // }

  public getUsers(): Observable<any> {
    const url = `${this.rest_Api_Server}/users`;
    return this.http.get<any>(url, this.httpOptions);
  }

  public getUserByCode(ID: any): Observable<any> {
    const url = `${this.rest_Api_Server}/users/${ID}`;
    return this.http.get<any>(url, this.httpOptions);
  }

  public postUser(data: any): Observable<any> {
    const url = `${this.rest_Api_Server}/users`;
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
