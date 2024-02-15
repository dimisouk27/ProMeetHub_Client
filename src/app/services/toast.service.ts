import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  registered: boolean = false;

  notifyMessage(){
    this.registered=true;
  }

  get isRegistered(){
    return this.registered;
  }
    
}
