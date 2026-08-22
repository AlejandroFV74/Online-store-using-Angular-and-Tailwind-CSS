import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { TimeAgoPipe } from '../../../shared/pipes/time-ago-pipe';
import { RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-product',
  imports: [CommonModule, TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {
  @Input({required: true}) product!: Product;

  @Output() addToCart = new EventEmitter();
  
  addToCartHandler() {
    this.addToCart.emit(this.product);
  }

}
