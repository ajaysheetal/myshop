import { NgModule } from '@angular/core';
import { TinymceModule } from './component/tinymce/tinymce.module';
const moduleList: any = [TinymceModule];

@NgModule({
  declarations: [],
  imports: [moduleList],
  exports: [moduleList],
})
export class SharedModule {}
