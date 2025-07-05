import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { FlowerService } from 'src/app/services/flower.service';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.css']
})
export class FlowerListComponent {
  flowers: any[] = [];

  constructor(private flowerService: FlowerService, private cartService: CartService,private authService: AuthService,private router: Router) {}

  ngOnInit(): void {
    this.flowerService.getFlowers().subscribe(data => {
      data = data.map(item=>{
        item.imageUrl = this.mapImage(item.name)
        return item
      })
      this.flowers = data;
    });
  }

  addToCart(flower: any) {
    if(!this.authService.isLoggedIn()){
      this.router.navigate(['/login']);
    }else {

      this.cartService.addToCart(flower.id).subscribe(() => {
        alert('Added to cart!');
      });
    }
  }
  mapImage(name:string){
    return `assets/images/${name.toLowerCase()}.png`
  }
}
