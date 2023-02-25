import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubCategoryListComponent } from './sub-category-list.component';
import { MatModuleModule } from 'src/app/mat-module/mat-module.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SubCategoryListComponent],
  imports: [
    CommonModule,
    MatModuleModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SubCategoryListComponent,
      },
    ]),
  ],
})
export class SubCategoryListModule {}
