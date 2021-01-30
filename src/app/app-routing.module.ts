import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentosComponent } from 'src/app//area-logada/lancamentos/lancamentos.component';
import { AreaLogadaComponent } from 'src/app/area-logada/area-logada.component';
import { PlanosContaComponent } from 'src/app/area-logada/planos-conta/planos-conta.component';
import { CadastroComponent } from 'src/app/cadastro/cadastro.component';
import { Erro404Component } from 'src/app/erro404/erro404.component';
import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from 'src/app/login/login.component';
import { EstaLogadoGuard } from 'src/app/shared/guards/esta-logado.guard';
import { GuardaLoginGuard } from 'src/app/shared/guards/guarda-login.guard';

const routes: Routes = [{
  path: '',
  component: AreaLogadaComponent,
  canActivate: [EstaLogadoGuard],
  children: [{
    path: 'home',
    component: HomeComponent
  },
 {
  path: 'planos-conta',
  component: PlanosContaComponent
}, {
  path: 'lancamentos',
  component: LancamentosComponent
}, {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}]
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: 'login',
  component: LoginComponent,
  canActivate: [GuardaLoginGuard]
}, {
  path: 'cadastro',
  component: CadastroComponent,
  canActivate: [GuardaLoginGuard]
},  {
  path: '**',
  component: Erro404Component
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
