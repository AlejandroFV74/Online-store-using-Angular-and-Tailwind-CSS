import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {
  @Input({required: true}) product!: Product;

  @Output() addToCart = new EventEmitter();
  
  addToCartHandler() {
    console.log('mensaje desde el componente product (hijo)');
    this.addToCart.emit('este es un mensaje desde el componente ' + this.product.name);
  }

}
