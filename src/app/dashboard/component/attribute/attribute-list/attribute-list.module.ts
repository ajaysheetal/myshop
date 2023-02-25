import { AttributeListComponent } from './attribute-list.component';
import { CommonModule } from '@angular/common';
import { MatModuleModule } from 'src/app/mat-module/mat-module.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AttributeListComponent],
  imports: [
    CommonModule,
    MatModuleModule,
    RouterModule.forChild([
      {
        path: '',
        component: AttributeListComponent,
      },
    ]),
  ],
})
export class AttributeListModule {}
