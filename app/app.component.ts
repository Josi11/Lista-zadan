import { Component } from '@angular/core';
import { ArrayType } from '../../node_modules/@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  noweZadanie: string;
  listaZadan: Array<string> = [];
  zadaniaZrobione: Array<string> = [];

  dodaj(zadanie: string) {
    this.listaZadan.push(zadanie);
  }

  usun(zadanie: string) {
    this.listaZadan = this.listaZadan.filter(e => e !== zadanie);
    console.log(this.listaZadan);
  }

  zrobione(zadanie: string) {
    this.zadaniaZrobione.push(zadanie);
    this.usun(zadanie);
  }
}


