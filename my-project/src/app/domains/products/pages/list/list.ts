import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product';
import { Header } from '../../../shared/components/header/header';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent, Header],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  
  //Inicializamos el signal con un array vacío de productos
  products = signal<Product[]> ([]);
  cart = signal<Product[]> ([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        name: 'Product 1',
        price: 10.99,
        description: 'Description for Product 1',
        imageUrl: 'https://picsum.photos/340/340?r=1'
      },
      {
        id: Date.now(),
        name: 'Product 2',
        price: 15.99,
        description: 'Description for Product 2',
        imageUrl: 'https://picsum.photos/340/340?r=2'
      },
      {
        id: Date.now(),
        name: 'Product 3',
        price: 15.99,
        description: 'Description for Product 3',
        imageUrl: 'https://picsum.photos/340/340?r=3'
      },
      {
        id: Date.now(),
        name: 'Product 4',
        price: 15.99,
        description: 'Description for Product 4',
        imageUrl: 'https://picsum.photos/340/340?r=4'
      },
      {
        id: Date.now(),
        name: 'Product 5',
        price: 10.99,
        description: 'Description for Product 5',
        imageUrl: 'https://picsum.photos/340/340?r=5'
      },
      {
        id: Date.now(),
        name: 'Product 6',
        price: 15.99,
        description: 'Description for Product 6',
        imageUrl: 'https://picsum.photos/340/340?r=6'
      },
      {
        id: Date.now(),
        name: 'Product 7',
        price: 15.99,
        description: 'Description for Product 7',
        imageUrl: 'https://picsum.photos/340/340?r=7'
      },
      {
        id: Date.now(),
        name: 'Product 8',
        price: 15.99,
        description: 'Description for Product 8',
        imageUrl: 'https://picsum.photos/340/340?r=8'
      }
      
    ];
    this.products.set(initProducts);
  } 

  addToCart(event: Product){
    this.cart.update(prevState => [...prevState, event]);
  }

}
