import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

 @Input() cognome: string;
 @Input() nome: string;
  saluto = 'Signore e Signori, BUONASERA';


 @Output()evento: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sendToHeader() {
    this.evento.emit(this.saluto);
  }

}
