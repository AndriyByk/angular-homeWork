import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../../urls/urls";
import {IPost} from "../../interfaces/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts)
  }

  getOne(id: number) : Observable<IPost> {
    return this.httpClient.get<IPost>(urls.posts + "/" + id);
  }
}
