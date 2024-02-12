import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/****************///module ddié à prime ng///***********************************/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
/***************************************************************************/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/compos/nav/nav.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProviderCardComponent } from './provider-card/provider-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingPageComponent,
    ProviderCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    ButtonModule,
    InputTextModule,
    BrowserAnimationsModule,
    MenubarModule,
    ToastModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
