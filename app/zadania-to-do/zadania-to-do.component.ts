import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-zadania-to-do',
  templateUrl: './zadania-to-do.component.html',
  styleUrls: ['./zadania-to-do.component.css']
})
export class ZadaniaToDoComponent implements OnInit {

  @Input()
  listaZadan = [];
  @Output()
  emitZrobione = new EventEmitter<string>();
  @Output()
  emitUsun = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  usun(zadanie: string) {
    this.emitUsun.emit(zadanie);
  }

  zrobione(zadanie: string) {
    this.emitZrobione.emit(zadanie);
  }

}
