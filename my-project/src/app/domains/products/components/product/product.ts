import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  @Input({required: true}) title: string = '';
  @Input({required: true}) price: number = 0;
  @Input({required: true}) img: string = '';

  @Output() addToCart = new EventEmitter();
  
  addToCartHandler() {
    console.log('mensaje desde el componente product (hijo)');
    this.addToCart.emit('este es un mensaje desde el componente ' + this.title);
  }

}
