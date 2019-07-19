import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './menu/sidenav/sidenav.component';
import { LancamentosTabsComponent } from './lancamentos/lancamentos-tabs/lancamentos-tabs.component';
import { ReceitasCadastroComponent } from './lancamentos/receitas/receitas-cadastro/receitas-cadastro.component';
import { ReceitasListaComponent } from './lancamentos/receitas/receitas-lista/receitas-lista.component';
import { DispesasCadastroComponent } from './lancamentos/dispesas/dispesas-cadastro/dispesas-cadastro.component';
import { DispesasListaComponent } from './lancamentos/dispesas/dispesas-lista/dispesas-lista.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    LancamentosTabsComponent,
    ReceitasCadastroComponent,
    ReceitasListaComponent,
    DispesasCadastroComponent,
    DispesasListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
