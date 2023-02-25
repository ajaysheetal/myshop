import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCategoryComponent } from './sub-category.component';
import { RouterModule } from '@angular/router';
import { MatModuleModule } from 'src/app/mat-module/mat-module.module';
import { TinymceModule } from 'src/app/shared/component/tinymce/tinymce.module';

@NgModule({
  declarations: [SubCategoryComponent],
  imports: [
    CommonModule,
    MatModuleModule,
    TinymceModule,

    RouterModule.forChild([
      {
        path: '',
        component: SubCategoryComponent,
      },
    ]),
  ],
})
export class SubCategoryModule {}
