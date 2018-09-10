import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-wykonane-zadania',
  templateUrl: './wykonane-zadania.component.html',
  styleUrls: ['./wykonane-zadania.component.css']
})
export class WykonaneZadaniaComponent implements OnInit {


  @Input()
  zadaniaWykonane: Array<string> = [];
  @Output()
  emitWykonane = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

}
