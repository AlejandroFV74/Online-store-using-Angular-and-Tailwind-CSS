import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  hideSideMenu = signal(true); 
  @Input() cart: Product[] = [];

  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }

  getTotalPrice() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

  removeFromCart(productID: number) {
    this.cart = this.cart.filter(p => p.id !== productID);
  }

}
