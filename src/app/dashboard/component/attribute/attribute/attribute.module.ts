import { AttributeComponent } from './attribute.component';
import { CommonModule } from '@angular/common';
import { MatModuleModule } from 'src/app/mat-module/mat-module.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AttributeComponent],
  imports: [
    CommonModule,
    MatModuleModule,
    RouterModule.forChild([
      {
        path: '',
        component: AttributeComponent,
      },
    ]),
  ],
})
export class AttributeModule {}
