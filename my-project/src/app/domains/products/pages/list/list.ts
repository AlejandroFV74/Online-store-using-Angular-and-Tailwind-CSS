import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product';
import { Header } from '../../../shared/components/header/header';
import { Cart } from '../../../shared/services/cart';
import { Product as ProductService } from '../../../shared/services/product';
import { Category } from '@shared/models/category';
import { Category as CategoryService } from '@shared/services/category';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  
  //Inicializamos el signal con un array vacío de productos
  products = signal<Product[]> ([]);
  categories = signal<Category[]> ([]);
  private cartService = inject(Cart);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }
 
  private getProducts() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }

  private getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
      }
    });
  }


  addToCart(product: Product){
    this.cartService.addToCart(product);
  }

}
