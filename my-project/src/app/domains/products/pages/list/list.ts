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

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        name: 'Product 1',
        price: 10.99,
        description: 'Description for Product 1',
        imageUrl: 'https://picsum.photos/340/340?r=23'
      },
      {
        id: Date.now(),
        name: 'Product 2',
        price: 15.99,
        description: 'Description for Product 2',
        imageUrl: 'https://picsum.photos/340/340?r=45'
      },
      {
        id: Date.now(),
        name: 'Product 3',
        price: 15.99,
        description: 'Description for Product 3',
        imageUrl: 'https://picsum.photos/340/340?r=5'
      },
      {
        id: Date.now(),
        name: 'Product 4',
        price: 15.99,
        description: 'Description for Product 4',
        imageUrl: 'https://picsum.photos/340/340?r=6'
      }
      
    ];
    this.products.set(initProducts);
  } 

  fromChild(event: String){
    console.log('mensaje desde el componente list');
    console.log(event);
  }

}
