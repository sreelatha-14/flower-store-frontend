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
    const path = this.baseUrl + "/add";
    return this.http.post(path, { flowerId, quantity: 1 });
  }

  removeFromCart(cartItemId: number) {
    const path = this.baseUrl + "/clear"
    return this.http.delete(`${path}/${cartItemId}`);
  }
  updateItemQuantity(cartItemId:number,quantity:number) {
    const path = this.baseUrl + '/update'
    return this.http.put(path,{cartItemId,quantity})
  }
}
