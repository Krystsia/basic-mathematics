import { Component, OnInit } from '@angular/core';
import {DataService} from "../../shared/services/data.service";
import {catchError, filter, map} from "rxjs/operators";
import {of} from "rxjs/internal/observable/of";
import {Response} from "@angular/http";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles: any[];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.dataService.getData().pipe(
      filter(data => !!data),
      map((data: Response) => data.json()),
      map((data) => data.articles),
      catchError(error => of(null))
    ).subscribe(data => {
      this.articles = data;
    })
  }

}
