import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        children: [
          {
            path: 'category',
            loadChildren: () =>
              import('./component/category/category.module').then(
                (m) => m.CategoryModule
              ),
          },
          {
            path: 'sub-category',
            loadChildren: () =>
              import('./component/sub-category/sub-category.module').then(
                (m) => m.SubCategoryModule
              ),
          },
          {
            path: 'attribute',
            loadChildren: () =>
              import('./component/attribute/attribute.module').then(
                (m) => m.AttributeModule
              ),
          },

          {
            path: 'product',
            loadChildren: () =>
              import('./component/product/product.module').then(
                (m) => m.ProductModule
              ),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
