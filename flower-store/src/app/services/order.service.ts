import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) {}

  placeOrder() {
    return this.http.post(this.baseUrl, {});
  }
  getOrders() {
    return this.http.get<any[]>(this.baseUrl, {});
  }
}
