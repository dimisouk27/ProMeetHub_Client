import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the 'HttpClient' class
import { IRegisterForm } from '../models/registerForm';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface IAuth {
  token: string,
  login: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly  _BASE_URL: string = "http://localhost:8080/api/user";
  private connectedUser: boolean = false;

  constructor(private readonly _httpClient: HttpClient) { 
    if(localStorage.getItem('login') !== null){
      this.connectedUser = true;
    }
  }

  register(registerForm: IRegisterForm): Observable<IAuth>{
    return this._httpClient.post<IAuth>(`${this._BASE_URL}/register`, registerForm).pipe(
      tap(
        auth => {
          localStorage.setItem("token", btoa(auth.token) );
          localStorage.setItem("login", btoa(auth.login));
          localStorage.setItem("role", btoa(auth.role));
          this.connectedUser=true;
        }
      )
    )
  }

  get isConnected(): boolean{
    return this.connectedUser;
  }
}
