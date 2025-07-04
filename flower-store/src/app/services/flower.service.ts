import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {

  private baseUrl = 'http://localhost:3000/flowers';

  constructor(private http: HttpClient) {}

  getFlowers() {
    return this.http.get<any[]>(this.baseUrl);
  }
}
