import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceCategoryService {
  private readonly _BASE_URL: string = 'http://localhost:8080/api/service_category';


  constructor(private _httpClient: HttpClient) { }

  getAll(): Observable<string[]>{
    return this._httpClient.get<string[]>(this._BASE_URL+'/')
  }
}
