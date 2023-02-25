import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'create',
        loadChildren: () =>
          import('./attribute/attribute.module').then((m) => m.AttributeModule),
      },
      {
        path: 'list',
        loadChildren: () =>
          import('./attribute-list/attribute-list.module').then(
            (m) => m.AttributeListModule
          ),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AttributeRoutingModule {}
