import { AttributeComponent } from './attribute.component';
import { AttributeRoutingModule } from './attribute-routing.module ';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AttributeComponent],
  imports: [CommonModule, AttributeRoutingModule],
})
export class AttributeModule {}
