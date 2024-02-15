import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/****************///module ddié à prime ng///***********************************/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
/***************************************************************************/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/compos/nav/nav.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProviderCardComponent } from './provider-card/provider-card.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorProvider } from './interceptors/auth.interceptor';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingPageComponent,
    ProviderCardComponent,
    RegisterComponent
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
    PanelModule,
    FieldsetModule,
    MessagesModule,
    ToastModule,
    ReactiveFormsModule, FormsModule,
    PasswordModule,
    HttpClientModule
  ],
  providers: [InterceptorProvider, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
