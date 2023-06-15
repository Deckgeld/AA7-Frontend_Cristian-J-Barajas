import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Esta line la generamos nosotros y es para que sign-in sea la pagina por defecto
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInModule) }, 
  { path: 'inventory', loadChildren: () => import('./pages/inventory/inventory.module').then(m => m.InventoryModule) }, 
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, 
  { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) }, 
  { path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  //Esta linea tambien la creamos nosotros, es para paginas que no existen
  { path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
