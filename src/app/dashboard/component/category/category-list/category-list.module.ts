import { CategoryListComponent } from './category-list.component';
import { CommonModule } from '@angular/common';
import { MatModuleModule } from 'src/app/mat-module/mat-module.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule,
    MatModuleModule,

    RouterModule.forChild([
      {
        path: '',
        component: CategoryListComponent,
      },
    ]),
  ],
})
export class CategoryListModule {}
