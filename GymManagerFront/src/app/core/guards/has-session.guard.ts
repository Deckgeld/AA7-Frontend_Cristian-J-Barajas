import { inject } from '@angular/core'
import { CanMatchFn, Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

export const hasSessionGuard: CanMatchFn = (route, state) => {

  //obtiene el router 
  const router = inject(Router);

  if(!environment.hasSession){
    router.navigate(['sign-in']);
  }

  return environment.hasSession
};
