import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCategoryService } from './sub-category.service';
import { SubCategoryComponent } from './sub-category.component';
import { SubCategoryRoutingModule } from './sub-category-routing.module';

@NgModule({
  declarations: [SubCategoryComponent],
  imports: [CommonModule, SubCategoryRoutingModule],
  providers: [SubCategoryService],
})
export class SubCategoryModule {}
