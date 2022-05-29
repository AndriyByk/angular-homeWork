import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    return this.httpClient
      .get<IPost[]>("https://jsonplaceholder.typicode.com/posts");
  }

  getPost(id: number): Observable<IPost> {
    return this.httpClient
      .get<IPost>("https://jsonplaceholder.typicode.com/posts/" + id);
  }
}
