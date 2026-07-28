import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cart = signal<Product[]>([]);
  total= computed(()=> this.cart().reduce((total, product) => total + product.price, 0));

  addToCart(product: Product) {
    this.cart.update(state => [...state, product]);
  }
}
