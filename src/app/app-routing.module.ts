import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { adminGuard, authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'administrador',
    loadChildren: () => import('./administrador/administrador.module').then( m => m.AdministradorPageModule), // Solo accesible para el administrador
    canActivate:[adminGuard]
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then( m => m.AsistenciaPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'construccion',
    loadChildren: () => import('./construccion/construccion.module').then( m => m.ConstruccionPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'escanner',
    loadChildren: () => import('./escanner/escanner.module').then( m => m.EscannerPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./pokemon/pokemon.module').then( m => m.PokemonPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'progreso',
    loadChildren: () => import('./progreso/progreso.module').then( m => m.ProgresoPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'recordar-cuenta',
    loadChildren: () => import('./recordar-cuenta/recordar-cuenta.module').then( m => m.RecordarCuentaPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'saber-asistencia',
    loadChildren: () => import('./saber-asistencia/saber-asistencia.module').then( m => m.SaberAsistenciaPageModule),
    canActivate:[authGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
