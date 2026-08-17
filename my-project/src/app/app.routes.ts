import { Routes } from '@angular/router';

import { List } from './domains/products/pages/list/list';
import { Layout } from './domains/shared/components/layout/layout';
import { NotFound } from './domains/info/pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: List,
      }
    ],
  },
  {
    path: '**',
    component: NotFound,
  },
];
