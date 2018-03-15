import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServiziomessaggiService } from '../serviziomessaggi.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

 @Input() cognome: string;
 @Input() nome: string;
  saluto = 'Signore e Signori, BUONASERA';

  messages: string[];


 @Output()evento: EventEmitter<string> = new EventEmitter();
  constructor(private messageService: ServiziomessaggiService) { }

  ngOnInit() {
    this.messageService.get().subscribe(x => this.messages = x);
    this.messageService.add('Sono nell onInit di body');
  }
  sendToHeader() {

    this.messageService.get().subscribe(x => this.messages = x);
    this.messageService.add(' ed ho mandato un saluto al mio header');
    this.evento.emit(this.saluto);

    console.log(this.messageService);
  }
  clear() {
    this.messageService.clear();
    this.messages = [];
  }
}
