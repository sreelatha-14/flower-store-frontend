import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = 'http://localhost:3000/cart';

  constructor(private http: HttpClient) {}

  getCart() {
    return this.http.get<any[]>(this.baseUrl);
  }

  addToCart(flowerId: number) {
    return this.http.post(this.baseUrl, { flowerId, quantity: 1 });
  }

  removeFromCart(cartItemId: number) {
    return this.http.delete(`${this.baseUrl}/${cartItemId}`);
  }
}
