import { createInjectableType } from '@angular/compiler';
import { inject } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Router, RouterStateSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment.development';




export const hasSessionGuard: CanMatchFn = (route, state) => {

  const router = inject(Router);

  if(!environment.hasSession){
    router.navigate(['sign-in']);
  }

  return environment.hasSession
};
