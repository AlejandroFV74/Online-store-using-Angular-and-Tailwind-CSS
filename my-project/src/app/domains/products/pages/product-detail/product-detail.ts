import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product as ProductService } from '@shared/services/product';
import { Product } from '@shared/models/product';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  @Input() id?: string;
  private productService = inject(ProductService);
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
}
