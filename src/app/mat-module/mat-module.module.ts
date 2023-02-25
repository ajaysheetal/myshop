import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';

const matModuleList = [
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatSlideToggleModule,
  MatExpansionModule,
  ReactiveFormsModule,
  FormsModule,
  MatDividerModule,
  MatMenuModule,
  MatCardModule,
  MatSnackBarModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatSelectModule,
  FormsModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatInputModule,
  MatRadioModule,
  MatTableModule,
  CdkTableModule,
  MatPaginatorModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, matModuleList],
  exports: [matModuleList],
})
export class MatModuleModule {
  constructor() {
    console.log('matmodule');
  }
}
