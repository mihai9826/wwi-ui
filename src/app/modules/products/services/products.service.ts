import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../post';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private REQ_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
      return this.http.get<Post[]>(this.REQ_URL);
  }
}
