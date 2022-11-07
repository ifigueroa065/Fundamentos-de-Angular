import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importando herramientas de angular
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //agregar lo importado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
