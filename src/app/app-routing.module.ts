import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProviderCardComponent } from './provider-card/provider-card.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path:'card', component: ProviderCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
