import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProviderCardComponent } from './provider-card/provider-card.component';
import { RegisterComponent } from './auth/register/register.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { Page404Component } from './auth/page404/page404.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'card', component: ProviderCardComponent },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [authGuard(false)],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [authGuard(false)],
  },
  {
    path : "**",
    component: Page404Component
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
