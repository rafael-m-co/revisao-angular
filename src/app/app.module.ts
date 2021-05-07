import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CursosModule, //necessário importar para que seja visto
    MatToolbarModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  