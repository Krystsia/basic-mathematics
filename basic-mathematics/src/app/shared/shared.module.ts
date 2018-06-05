import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ChartComponent } from './chart/chart.component';
import {DataService} from "./services/data.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChartComponent,
    NavbarComponent,

  ],
  providers: [
    DataService,
  ],
  exports: [
    ChartComponent,
    NavbarComponent,
  ],
})
export class SharedModule { }
