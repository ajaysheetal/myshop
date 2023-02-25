import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { RouterModule } from '@angular/router';
import { MatModuleModule } from 'src/app/mat-module/mat-module.module';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    MatModuleModule,

    RouterModule.forChild([
      {
        path: '',
        component: CategoryComponent,
      },
    ]),
  ],
})
export class CategoryModule {}
