import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FlowerService } from 'src/app/services/flower.service';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.css']
})
export class FlowerListComponent {
  flowers: any[] = [];

  constructor(private flowerService: FlowerService, private cartService: CartService) {}

  ngOnInit(): void {
    this.flowerService.getFlowers().subscribe(data => {
      this.flowers = data;
    });
  }

  addToCart(flower: any) {
    this.cartService.addToCart(flower.id).subscribe(() => {
      alert('Added to cart!');
    });
  }
}
