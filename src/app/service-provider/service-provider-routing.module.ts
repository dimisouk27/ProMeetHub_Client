import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddServiceTypeComponent } from './add-service-type/add-service-type.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';

const routes: Routes = [
  { 
    path: '', 
    component: ServiceProviderComponent,
    children: [
        {path:'', component: DashboardComponent},
        {path: 'add-service-type', component: AddServiceTypeComponent}
    ]
  }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServiceProviderRoutingModule { }