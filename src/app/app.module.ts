import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePT from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from 'src/app/home/home.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaLogadaComponent } from './area-logada/area-logada.component';
import { LancamentosComponent } from './area-logada/lancamentos/lancamentos.component';
import { PlanosContaComponent } from './area-logada/planos-conta/planos-conta.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Erro404Component } from './erro404/erro404.component';
import { LoginComponent } from './login/login.component';
import { ExercicioDataBindingsComponent } from './shared/exercicio-data-bindings/exercicio-data-binding.component';
import { ExercicioDiretivasComponent } from './shared/exercicio-diretivas/exercicio-diretivas.component';
import { ExercicioPipesComponent } from './shared/exercicio-pipes/exercicio-pipes.component';
import { HeaderComponent } from './shared/header/header.component';

registerLocaleData(localePT, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ExercicioDataBindingsComponent,
    ExercicioDiretivasComponent,
    ExercicioPipesComponent,
    LoginComponent,
    PlanosContaComponent,
    CadastroComponent,
    LancamentosComponent,
    Erro404Component,
    AreaLogadaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }, {
    provide: DEFAULT_CURRENCY_CODE,
    useValue: 'BRL'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
