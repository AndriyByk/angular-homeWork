import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../../urls/urls";
import {IComment} from "../../interfaces/IComment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.comments)
  }

  getOne(id: number) : Observable<IComment> {
    return this.httpClient.get<IComment>(urls.comments + "/" + id);
  }
}
