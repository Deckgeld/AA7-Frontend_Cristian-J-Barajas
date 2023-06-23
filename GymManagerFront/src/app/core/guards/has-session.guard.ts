import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { environment } from 'src/environments/environment.development';

export const hasSessionGuard: CanMatchFn = (route, state) => {
  const router = inject(Router);
  const cookie = inject(CookieService);

  //Obtenemos la cookie
  const session = cookie.get('session');  

  let dataUser;
  //!! valida que la sesion sea diferente a undefined y/o '' (que no tenga nada)
  if(!!session){
    //La decodificamos
    dataUser = JSON.parse(atob(session !== undefined ? session : ''));
  }
  //!? devuelve tru o false si es que dataUser existe
  if (!dataUser?.hasSession) {
    router.navigate(['sign-in']);
  } 

  //nota se codifica con btoa y descodifica con atob


  return !!dataUser?.hasSession;
};
