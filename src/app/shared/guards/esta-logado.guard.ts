import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EstaLogadoGuard implements CanActivate {

  constructor(
      private authService: AuthService,
      private router: Router
    ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const estaLogado = this.authService.estaLogado();
    if (estaLogado) {
      return true;
    }
    this.router.navigate(['login']);
  return false;
  }

}
