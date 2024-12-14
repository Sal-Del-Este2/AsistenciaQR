import { CanActivateFn } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { map, take } from 'rxjs/operators';

const ADMIN_EMAIL = 'admin'; // Reemplaza con el correo del administrador

// Guard general para autenticación
export const authGuard: CanActivateFn = (route, state) => {
  const afAuth = inject(AngularFireAuth);
  const router = inject(Router);

  return afAuth.authState.pipe(
    take(1),
    map(user => {
      // Verifica si el usuario está autenticado en Firebase o si el usuario local está logueado
      const localUserLoggedIn = localStorage.getItem('localUserLoggedIn') === 'true';

      if (user || localUserLoggedIn) { // || localUserLoggedIn
        return true; // Usuario autenticado ya sea en Firebase o localmente
      } else {
        router.navigate(['/home']); // Redirige a la página de login
        return false; // Usuario no autenticado
      }
    })
  );
};

// Guard administrador para autenticación
export const adminGuard: CanActivateFn = (route, state) => {
  const afAuth = inject(AngularFireAuth);
  const router = inject(Router);

  return afAuth.authState.pipe(
    take(1),
    map(user => {
      const isAdmin = user?.email === ADMIN_EMAIL;
      const localUserLoggedIn = localStorage.getItem('localUserLoggedIn') === 'true';

      if (isAdmin || localUserLoggedIn) {
        return true; // Permitir acceso solo al administrador
      } else {
        router.navigate(['/home']); // Redirigir a inicio si no es administrador
        return false;
      }
    })
  );
};