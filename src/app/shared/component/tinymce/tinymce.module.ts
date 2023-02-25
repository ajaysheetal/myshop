import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgModule } from '@angular/core';
import { TinymceComponent } from './tinymce.component';

@NgModule({
  declarations: [TinymceComponent],
  imports: [CommonModule, EditorModule],
  exports: [TinymceComponent],
})
export class TinymceModule {}
