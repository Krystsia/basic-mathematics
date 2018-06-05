import {Injectable} from "@angular/core";
import {Headers, Http, Response, URLSearchParams} from "@angular/http";
import {RequestOptionsArgs} from "@angular/http/src/interfaces";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";


@Injectable()
export class DataService {
  private readonly apiKey = 'f1fdf072013c4b1e8b92b027a92a8977';
  private url = 'https://newsapi.org/v2/top-headlines';


  constructor(private http: Http,) {

  }

  getData(): Observable<Response> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('sources', 'google-news-ru');
    params.set('apiKey', this.apiKey);

    let options: RequestOptionsArgs = {
      params: params,
    }

    return this.http.get(this.url, options)
  }
}
