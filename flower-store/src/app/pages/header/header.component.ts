import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'flower-store';
  isLoggedIn = false;
  firstLetter: any;
  showDropdown = false;

  constructor(private router: Router, private authSerive: AuthService) {}
  ngOnInit(): void {
    this.isLoggedIn = this.authSerive.isLoggedIn()
    if(this.isLoggedIn){
      const user:any = this.authSerive.getUser();
      if(user){
        this.firstLetter = user?.name[0].toUpperCase()
      }
    }
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  logout() {
    localStorage.removeItem('token'); // Or your auth key
    this.showDropdown = false;
    this.router.navigate(['/login']);
  }
}
