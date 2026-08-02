import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product';
import { Header } from '../../../shared/components/header/header';
import { Cart } from '../../../shared/services/cart';
import { Product as ProductService } from '../../../shared/services/product';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent, Header],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  
  //Inicializamos el signal con un array vacío de productos
  products = signal<Product[]> ([]);
  private cartService = inject(Cart);
  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }
 


  addToCart(product: Product){
    this.cartService.addToCart(product);
  }

}
