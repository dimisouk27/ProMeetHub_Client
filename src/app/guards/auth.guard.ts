import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

export function authGuard(shouldBeConnected: boolean) : CanActivateFn {
    return (route, state): boolean => {
        const authService = inject(AuthService);
        const router = inject(Router); 
        console.log(authService.isConnected)
        if(authService.isConnected)
            router.navigateByUrl("/")
        return shouldBeConnected ? authService.isConnected : !authService.isConnected;
    }
}