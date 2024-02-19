import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/****************/ //module ddié à prime ng///***********************************/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { PasswordModule } from 'primeng/password';

/***************************************************************************/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/compos/nav/nav.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProviderCardComponent } from './provider-card/provider-card.component';
import { RegisterComponent } from './auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorProvider } from './interceptors/auth.interceptor';
import { MessageService } from 'primeng/api';
import { LoginComponent } from './auth/login/login.component';
import { Page404Component } from './auth/page404/page404.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingPageComponent,
    ProviderCardComponent,
    RegisterComponent,
    LoginComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    BrowserAnimationsModule,
    MenubarModule,
    ToastModule,
    AvatarGroupModule,
    AvatarModule,
    CardModule,
    PanelModule,
    FieldsetModule,
    ReactiveFormsModule,
    PasswordModule,
    HttpClientModule,
  ],
  providers: [InterceptorProvider, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
