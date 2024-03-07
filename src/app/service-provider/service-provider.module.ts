import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddServiceTypeComponent } from './add-service-type/add-service-type.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { ServiceProviderRoutingModule } from './service-provider-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceTypeComponent } from './service-type/service-type.component';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ListboxModule } from 'primeng/listbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { KeyFilterModule } from 'primeng/keyfilter';

@NgModule({
  declarations: [
    AddServiceTypeComponent,
    ServiceProviderComponent,
    DashboardComponent,
    ServiceTypeComponent,
    
  ],
  imports: [
    CommonModule,
    ServiceProviderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    AvatarModule,
    CardModule,
    DropdownModule,
    MultiSelectModule,
    ListboxModule,
    InputTextModule,
    InputTextareaModule,
    InputSwitchModule,
    KeyFilterModule
    
  ]
})
export class ServiceProviderModule { }
