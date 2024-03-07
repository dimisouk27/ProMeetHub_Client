import { Component } from '@angular/core';
import { NavComponent } from 'src/app/shared/compos/nav/nav.component';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.scss']
})
export class ServiceProviderComponent {
  

  constructor(private readonly nav: NavComponent){
    this.nav.items?.push(
      {
        label: 'Ajouter un type de service',
        icon: 'pi pi-fw pi-plus',
        routerLink: '/add-service-type'
      }
    )
  }

}
