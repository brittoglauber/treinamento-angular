import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Aula2Component } from './aula2/aula2.component';
import { BotaoComponent } from './aula2/botao/botao.component';


@NgModule({
  declarations: [
    AppComponent,
    Aula2Component,
    BotaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
