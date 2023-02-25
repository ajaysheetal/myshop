import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'create',
        loadChildren: () =>
          import('./sub-category/sub-category.module').then(
            (m) => m.SubCategoryModule
          ),
      },
      {
        path: 'list',
        loadChildren: () =>
          import('./sub-category-list/sub-category-list.module').then(
            (m) => m.SubCategoryListModule
          ),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class SubCategoryRoutingModule {}
