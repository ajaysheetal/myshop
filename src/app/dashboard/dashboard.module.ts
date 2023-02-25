import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatModuleModule } from '../mat-module/mat-module.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, MatModuleModule, DashboardRoutingModule],
})
export class DashboardModule {
  constructor() {
    console.log('dashboard');
  }
}
