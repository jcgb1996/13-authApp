import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authServices: AuthService = inject( AuthService );
  const router = inject( Router );


  if(authServices.authStatus() === AuthStatus.authenticated ) return true

  const url = state.url;
  localStorage.setItem('path', url);

  router.navigateByUrl('./auth/');


  return false;
};
