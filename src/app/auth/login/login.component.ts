import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil, tap } from 'rxjs';
import { LoginForm, Role } from 'src/app/models/AuthForms';
import { AuthService, IAuth } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  loginForm: FormGroup;
  private destroyed$ = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly messageService: MessageService,
    private readonly router: Router
  ) {
    this.loginForm = formBuilder.group(LoginForm);
  }
  ngOnDestroy(): void {
    this.destroyed$.complete();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value)
        .pipe(
          takeUntil(this.destroyed$) // pour arrêter l'evenement si le composant est  détruit
        )
        .subscribe({
          next: (response) => {
            this.loginForm.reset();
            this.messageService.add({
              severity: 'success',
              summary: 'Connexion réussie!',
            }),
              response.role == Role.SERVICE_PROVIDER
                ? this.router.navigateByUrl('/service-provider')
                : this.router.navigateByUrl('/');
          },
          error: (errorResponse: HttpErrorResponse) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Erreur de connexion',
              detail: errorResponse.error.message,
            });
          },
        });
    }
  }
  preInsertData() {
    this.loginForm.controls['email'].setValue('John@Doe.com');
    this.loginForm.controls['password'].setValue('Test1234=');
  }
}
