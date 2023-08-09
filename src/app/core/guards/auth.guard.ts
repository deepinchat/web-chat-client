import { CanActivateFn } from '@angular/router';
import { inject } from "@angular/core";
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  return authService.isLoggedIn()
    .pipe(map(loggedIn => {
      if (loggedIn) {
        return true
      } else {
        authService.signinRedirect({ state: { returnUrl: state.url } });
        return false;
      }
    }));
};
