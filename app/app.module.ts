import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DodajZadanieComponent } from './dodaj-zadanie/dodaj-zadanie.component';
import { ZadaniaToDoComponent } from './zadania-to-do/zadania-to-do.component';
import { WykonaneZadaniaComponent } from './wykonane-zadania/wykonane-zadania.component';

@NgModule({
  declarations: [
    AppComponent,
    DodajZadanieComponent,
    ZadaniaToDoComponent,
    WykonaneZadaniaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
