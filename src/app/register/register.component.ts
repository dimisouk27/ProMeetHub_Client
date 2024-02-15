import { Component, NgZone, OnDestroy, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterForm } from '../models/registerForm';
import { AuthService, IAuth } from '../services/auth.service';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { MessageService} from 'primeng/api';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnDestroy {
  registerForm: FormGroup;
  private destroyed$ = new Subject();
  constructor(
    private formBuilder: FormBuilder,
    private readonly _authService: AuthService,
    public messageService: MessageService,
    private readonly toastService : ToastService,
    private readonly router : Router,
    private  ngZone: NgZone
  ) {
    this.registerForm = this.formBuilder.group(RegisterForm);
  }
  ngOnDestroy(): void {
    this.destroyed$.complete();
  }

  onSubmit() {
    console.log(this.registerForm.value);
    
    if (this.registerForm.valid) {
      this._authService.register(this.registerForm.value).pipe(//
        takeUntil(this.destroyed$), // pour arrêter l'evenement si le composant est  détruit
        tap(() => {
          this.toastService.notifyMessage();
          this.router.navigateByUrl("/");
        })
      )
      .subscribe({
        
        next: (response: IAuth) => {
          console.log('Utilisateur créé avec succès', response);
          this.registerForm.reset();
          
        },
        error: (errorResponse: HttpErrorResponse) => {
          this.messageService.add({severity:'error', summary: 'Erreur d\'inscription', detail: errorResponse.error.message})
        },
      });
    }
  }

  preInsertData(){
    this.registerForm.controls["lastName"].setValue("Doe");
    this.registerForm.controls["firstName"].setValue("John");
    this.registerForm.controls["email"].setValue("John@Doe.com");
    this.registerForm.controls["password"].setValue("Test1234=");
    this.registerForm.controls["phoneNumber"].setValue("0478985768");
    this.registerForm.controls["streetNumber"].setValue(4);
    this.registerForm.controls["street"].setValue("rue Dupont");
    this.registerForm.controls["zipCode"].setValue(6000);
    this.registerForm.controls["city"].setValue("Charleroi");
    this.registerForm.controls["country"].setValue("Belgique");
  }
}
