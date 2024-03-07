import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the 'HttpClient' class
import { ILoginForm, IRegisterForm, Role } from '../../models/AuthForms';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface IAuth {
  token: string;
  login: string;
  role: Role;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _BASE_URL: string = 'http://localhost:8080/api/user';

  private readonly AUTH_KEY = 'auth';

  private _connectedUser$ = new BehaviorSubject<IAuth | undefined>(
    this.getUserFromStorage()
  );

  constructor(private readonly _httpClient: HttpClient) {}

  register(registerForm: IRegisterForm): Observable<IAuth> {
    return this._httpClient
      .post<IAuth>(`${this._BASE_URL}/register`, registerForm)
      .pipe(tap((auth) => (this.connectedUser = auth)));
  }

  login(loginForm: ILoginForm): Observable<IAuth> {
    return this._httpClient
      .post<IAuth>(`${this._BASE_URL}/login`, loginForm)
      .pipe(tap((auth) => (this.connectedUser = auth)));
  }

  logout() {
    this.connectedUser = undefined; //this use setter "connectedUser" to set connectedUser to undefined, that removes IAuth from storage
  }

  get isConnected() {
    return this._connectedUser$.value != undefined;
  }

  private getUserFromStorage(): IAuth | undefined {
    const authString: string | null = localStorage.getItem(this.AUTH_KEY);
    return authString ? JSON.parse(atob(authString)) : undefined;
  }

  set connectedUser(user: IAuth | undefined) {
    if (user) localStorage.setItem(this.AUTH_KEY, btoa(JSON.stringify(user)));
    else localStorage.removeItem(this.AUTH_KEY);

    this._connectedUser$.next(user);
  }

  get connectedUser(): IAuth | undefined {
    return this._connectedUser$.value;
  }

  get connectedUserAsObs(): Observable<IAuth | undefined> {
    return this._connectedUser$.asObservable();
  }

  get token(): string | undefined {
    return this.connectedUser?.token;
  }

  get role(): Role | undefined {
    return this._connectedUser$.value?.role;
  }

  get email(): string | undefined {
    return this.connectedUser?.login;
  }
}
