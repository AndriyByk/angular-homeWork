import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../models/IComment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getComments(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>("https://jsonplaceholder.typicode.com/comments");
  }
  getComment(id: number): Observable<IComment> {
    return this.httpClient.get<IComment>("https://jsonplaceholder.typicode.com/comments/" + id);
  }
}
