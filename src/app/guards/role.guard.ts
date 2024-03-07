import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Role } from '../models/AuthForms';
export function roleGuard(
  roleGuarded: Role,
  redirectPath: string = '/'
): CanActivateFn {
  return (route, state): boolean => {
    const authService = inject(AuthService);
    const router = inject(Router);

    const isConnected = authService.isConnected;
    const userRole = authService?.role;

    if (isConnected && userRole == roleGuarded) {
      // On vérifie si l'utilisateur a le rôle demandé dans son profil

      return true; // Accès autorisé
    } else {
      // Rediriger vers la page spécifiée ou la page par défaut
      router.navigate([redirectPath]);
      return false;
    }
  };
}
