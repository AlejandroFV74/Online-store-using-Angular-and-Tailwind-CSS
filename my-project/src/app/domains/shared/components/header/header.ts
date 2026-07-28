import { Component, Input, signal, inject, SimpleChange, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  hideSideMenu = signal(true); 
  private cartService = inject(Cart);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }


}
