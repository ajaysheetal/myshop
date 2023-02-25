import { CommonModule } from '@angular/common';
import { MatModuleModule } from 'src/app/mat-module/mat-module.module';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    MatModuleModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductComponent,
      },
    ]),
  ],
})
export class ProductModule {}
