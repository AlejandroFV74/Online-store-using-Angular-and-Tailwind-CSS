import { Component, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';
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
  total = signal(0);

  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }

  ngOnChanges(changes: SimpleChanges){
    const cart = changes['cart'];
    if(cart){
      this.total.set(this.getTotalPrice()); 
    }
  }

  getTotalPrice() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

  removeFromCart(productID: number) {
    this.cart = this.cart.filter(p => p.id !== productID);
  }

}
