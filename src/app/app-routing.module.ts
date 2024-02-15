import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProviderCardComponent } from './provider-card/provider-card.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path:'card', component: ProviderCardComponent},
  {path:'register', component: RegisterComponent, canActivate: [authGuard(false)]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
