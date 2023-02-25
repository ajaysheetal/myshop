import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'create',
        loadChildren: () =>
          import('./category/category.module').then((m) => m.CategoryModule),
      },

      {
        path: 'list',
        loadChildren: () =>
          import('./category-list/category-list.module').then(
            (m) => m.CategoryListModule
          ),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
