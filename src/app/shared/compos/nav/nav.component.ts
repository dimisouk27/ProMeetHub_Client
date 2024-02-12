import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  items: MenuItem[]|undefined;


  
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


}
