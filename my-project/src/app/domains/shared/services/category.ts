import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category as categoryModel } from '@shared/models/category';

@Injectable({
  providedIn: 'root',
})
export class Category {

    private http= inject(HttpClient);

    getCategories() {
        return this.http.get<categoryModel[]>('https://api.escuelajs.co/api/v1/categories');
      }

  
}
