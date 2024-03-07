import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IServiceTypeForm } from 'src/app/models/ServiceTypeForm';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private readonly _BASE_URL: string = 'http://localhost:8080/api/service_provider';

  constructor(private readonly _httpClient: HttpClient) {}

  
  addServiceType(serviceTypeForm: IServiceTypeForm): Observable<boolean> {
    console.log(serviceTypeForm)
    serviceTypeForm.startTime = formatDate(serviceTypeForm.startTime,"HH:mm","en-US")
    serviceTypeForm.endTime = formatDate(serviceTypeForm.endTime,"HH:mm","en-US")
    console.log(serviceTypeForm);
    
    return this._httpClient
      .post<boolean>(`${this._BASE_URL}/add_service_type`, serviceTypeForm)
  }
}
