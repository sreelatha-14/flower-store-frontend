import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders: any[] = [];

  constructor(private ordersService: OrderService) {}

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders() {
    this.ordersService.getOrders().subscribe({
      next: (res) => {
        this.orders = res;
      },
      error: (err) => {
        console.error('Failed to fetch orders:', err);
      }
    });
  }

}
