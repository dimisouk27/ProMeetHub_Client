import { inject } from "@angular/core";
import { CanActivateFn, NavigationCancel, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { tap } from "rxjs";

export function authGuard(shouldBeConnected: boolean, redirectPath: string = '/') : CanActivateFn {
    return (route, state): boolean => {
        const authService = inject(AuthService);
        const router = inject(Router); 

        const isConnected = authService.isConnected;

        if ((shouldBeConnected && isConnected) || (!shouldBeConnected && !isConnected)) {
            return true; // Accès autorisé
        } else {
            // Rediriger vers la page spécifiée ou la page par défaut
            router.navigate([redirectPath]);
            return false;
        }
    };
}