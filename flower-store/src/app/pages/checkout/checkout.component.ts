import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cartItems: any[] = [];
  total = 0;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe(items => {
      this.cartItems = items;
      this.total = items.reduce((sum: number, item: any) => sum + item.flower.price * item.quantity, 0);
    });
  }

  placeOrder() {
    this.orderService.placeOrder().subscribe(() => {
      alert('Order placed successfully!');
      this.router.navigate(['/']);
    });
  }
}
