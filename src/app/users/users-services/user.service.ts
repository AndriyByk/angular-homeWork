import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../interfaces/IUser";
import {urls} from "../../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {}

  getAll():Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users)
  }

  getOne(id: number) : Observable<IUser> {
    return this.httpClient.get<IUser>(urls.users + "/" + id);
  }
}
