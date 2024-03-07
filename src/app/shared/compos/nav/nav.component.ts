import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { Role } from 'src/app/models/AuthForms';
import { AuthService, IAuth } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  items: MenuItem[] | undefined;
  toggleBtnNotConnected: boolean = false;
  constructor(
    private readonly $auth: AuthService,
    private readonly router: Router
  ) {
    $auth.connectedUserAsObs.subscribe({
      next: (auth) => {
        console.log(auth?.role);
        this.items = [
          {
            label: 'Accueil',
            icon: 'pi pi-fw pi-home',
            routerLink:
              this.$auth.role === Role.CLIENT ? '/' : '/service-provider/',
          },
          {
            label: 'Mes réservations',
            icon: 'pi pi-fw pi-calendar',
            visible: this.$auth.role === (Role.SERVICE_PROVIDER || Role.CLIENT),
            routerLink:
              this.$auth.role === Role.CLIENT
                ? '/client/my-bookings'
                : '/service-provider/my-bookings',
          },
          {
            label: 'Créer un type de service',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/service-provider/add-service-type',
            visible: this.$auth.role === Role.SERVICE_PROVIDER,
          },
        ];
      },
    });
  }

  ngOnInit(): void {}

  get isConnected() {
    return this.$auth.isConnected;
  }
  logout() {
    this.$auth.logout();
    this.router.navigateByUrl('/login');
  }

  toggleBtn() {
    this.toggleBtnNotConnected = !this.toggleBtnNotConnected;
  }
}
