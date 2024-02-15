import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  items: MenuItem[]|undefined;

  constructor( private readonly $auth: AuthService){
     
  }

  
  ngOnInit(): void {
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      },
      {
        label: 'Liste des réunions',
        icon: 'pi pi-fw pi-calendar',
        routerLink: '/meetings'
      },
      {
        label: 'Créer une réunion',
        icon: 'pi pi-fw pi-plus',
        routerLink: '/meetings/create'
      }
    ];
  }

  get isConnected(){
    return this.$auth.isConnected;
  }


}
