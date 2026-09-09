import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product as ProductService } from '@shared/services/product';
import { Product } from '@shared/models/product';
import { Cart } from '@shared/services/cart';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  @Input() id?: string;
  private productService = inject(ProductService);
  private cartService = inject(Cart);
  product = signal<Product | null>(null);
  cover = signal('');

  ngOnInit() {
    if (this.id) {
      this.productService.getOne(this.id).subscribe({
        next: (product) => {
          this.product.set(product);
          if(product.images.length > 0){
            this.cover.set(product.images[0]);
          }
        },
      });
    }
  }

  changeCover(image: string) {
    this.cover.set(image);
  }

  addToCart() {
    const product = this.product();
    if (product){
      this.cartService.addToCart(product);
    }
  }
}
