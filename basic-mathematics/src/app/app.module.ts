import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule} from "@angular/material";
import {SharedModule} from "./shared/shared.module";
import {HttpModule} from "@angular/http";
import {NewsModule} from "./news/news.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpModule,
    NewsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
