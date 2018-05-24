import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChartComponent,
    NavbarComponent,

  ],
  exports: [
    ChartComponent,
    NavbarComponent,
  ],
})
export class SharedModule { }
