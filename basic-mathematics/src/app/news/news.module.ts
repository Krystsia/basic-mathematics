import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { NewsComponent } from './news/news.component';
import {MatGridListModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
  ],
  declarations: [ArticleComponent, NewsComponent],
  exports: [
    ArticleComponent, NewsComponent,
  ]
})
export class NewsModule { }
