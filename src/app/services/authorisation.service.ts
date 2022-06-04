import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../interfaces/IUser";
import { Observable } from 'rxjs';
import {IToken} from "../interfaces/IToken";
import {urls} from "../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {
  private accessTokenKey = 'access';

  constructor(private httpClient: HttpClient) { }

  register(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user)
  }

  login(user: IUser): Observable<IToken> {
    return this.httpClient.post<IToken>(urls.authorisation, user)
  }

  setToken(token: IToken): void {
    localStorage.setItem(this.accessTokenKey, token.access)
  }

  getToken(): string {
    return localStorage.getItem(this.accessTokenKey) as string;
  }

  deleteToken(): void {
    localStorage.removeItem(this.accessTokenKey)
  }

  isAuthorized(): boolean {
    return !!localStorage.getItem(this.accessTokenKey)
  }
}
