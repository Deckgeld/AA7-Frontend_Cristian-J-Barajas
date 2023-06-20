import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitLayoutComponent } from './share/init-layout/init-layout.component';
import { AdminLayoutComponent } from './share/admin-layout/admin-layout.component';
import { hasSessionGuard } from './core/guards/has-session.guard';


const routes: Routes = [
  //Esta line la generamos nosotros y es para que sign-in sea la pagina por defecto
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  //RUTAS que tendran el LAYOUT initLayout
  { path: '', component: InitLayoutComponent, children:[
      { path: 'sign-in', loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInModule) }, 
      { path: 'sign-up', loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule) },
    ] 
  },
  //RUTAS que tendran el LAYOUT AdminLayout
  { path: '', component: AdminLayoutComponent, children:[
      { path: 'inventory', loadChildren: () => import('./pages/inventory/inventory.module').then(m => m.InventoryModule), canActivate: [hasSessionGuard] }, 
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), canMatch: [hasSessionGuard] }, 
      { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule), canActivate: [hasSessionGuard] }, 
      { path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
    ] 
  },
  //Esta linea tambien la creamos nosotros, es para paginas que no existen
  { path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
