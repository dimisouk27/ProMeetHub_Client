import { formatDate } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IServiceTypeForm } from 'src/app/models/service_provider/ServiceTypeForm';
import { AuthService } from '../auth/auth.service';
import { ServiceProvider } from 'src/app/models/service_provider/serviceProvider';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  private readonly _BASE_URL: string =
    'http://localhost:8080/api/service_provider';

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly $authService: AuthService
  ) {}

  addServiceType(serviceTypeForm: IServiceTypeForm): Observable<boolean> {
    console.log(serviceTypeForm);
    serviceTypeForm.startTime = formatDate(
      serviceTypeForm.startTime,
      'HH:mm',
      'en-US'
    );
    serviceTypeForm.endTime = formatDate(
      serviceTypeForm.endTime,
      'HH:mm',
      'en-US'
    );
    console.log(serviceTypeForm);

    return this._httpClient.post<boolean>(
      `${this._BASE_URL}/add_service_type`,
      serviceTypeForm
    );
  }

  getMyServiceType(): Observable<IServiceTypeForm[]> {
    return this._httpClient.get<IServiceTypeForm[]>(
      `${this._BASE_URL}/get_service_types/` + this.$authService.email
    );
  }

  setServiceTypeState(title: string, enabled: boolean){
    return this._httpClient.patch<boolean>(`${this._BASE_URL}/set_service_type_state/${this.$authService.email}/${title}`,enabled);
  }

  get(): Observable<ServiceProvider>{
    return  this._httpClient.get<ServiceProvider>(
      `${this._BASE_URL}/` + this.$authService.email
    );
  }
}
