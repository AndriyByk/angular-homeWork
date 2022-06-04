import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICar} from "../interfaces/ICar";
import {Observable} from "rxjs";
import {urls} from "../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(urls.cars)
  }

  getOne(id: string): Observable<ICar> {
    return this.httpClient.get<ICar>(`${urls.cars}` + '/' + `${id}`)
  }

  update(id: string, carForUpdating: Partial<ICar>): Observable<ICar> {
    return this.httpClient.patch<ICar>(`${urls.cars}` + '/' + `${id}`, carForUpdating)
  }

  add(newCar: ICar): Observable<ICar> {
    return this.httpClient.post<ICar>(urls.cars, newCar)
  }

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${urls.cars}` + '/' + `${id}`)
  }
}
