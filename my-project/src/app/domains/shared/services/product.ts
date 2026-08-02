import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product as ProductModel} from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class Product {

  private http= inject(HttpClient);
  constructor() { }

  getProducts() {
    return this.http.get<ProductModel[]>('https://api.escuelajs.co/api/v1/products');
  }
  
}
