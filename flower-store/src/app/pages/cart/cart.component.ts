import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartService.getCart().subscribe(data => {
      data = data.map(item=>{
        item.flower.imageUrl = this.mapImage(item.flower.name)
        return item
      })
      this.cartItems = data;
    });
  }

  mapImage(name:string){
    return `assets/images/${name.toLowerCase()}.png`
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item.id).subscribe(() => {
      this.loadCart();
    });
  }
  getCartTotal(): number {
  return this.cartItems.reduce((total, item) => {
    return total + item.flower.price * item.quantity;
  }, 0);
  }

  increaseQuantity(item: any) {
  item.quantity++;
  this.updateCartItem(item);
}

decreaseQuantity(item: any) {
  if (item.quantity > 1) {
    item.quantity--;
    this.updateCartItem(item);
  } else {
    this.removeFromCart(item);
  }
}

updateCartItem(item: any) {
  this.cartService.updateItemQuantity(item.id, item.quantity).subscribe();
}
}
