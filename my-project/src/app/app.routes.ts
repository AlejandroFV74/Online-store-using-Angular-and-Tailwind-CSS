import { Routes } from '@angular/router';

import { List } from './domains/products/pages/list/list';
import { Layout } from './domains/shared/components/layout/layout';
import { NotFound } from './domains/info/pages/not-found/not-found';
import {ProductDetail} from './domains/products/pages/product-detail/product-detail';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: List,
      },
      {
        path: 'product/:id',
        component: ProductDetail,
      }
    ],
  },
  {
    path: '**',
    component: NotFound,
  },
];
