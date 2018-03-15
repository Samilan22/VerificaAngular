import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../model/model';
import { ContextService } from '../context.service';
import { ServiziomessaggiService } from '../serviziomessaggi.service';
import { post } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  frase: string;
  numero: number;
  booleano: boolean;
  notifica: number;
  post: number;
  commenti: number;
  album: number;
  foto: number;
  @Input() saluto: string;
  nomi: string[];
  messages: string[];

  constructor(private servizio: ContextService, private messageService: ServiziomessaggiService) {
    this.servizio.getNome().subscribe(nome => this.frase = nome);
    this.servizio.getNumTel().subscribe(numeroTel => this.numero = numeroTel);
    this.servizio.getSesso().subscribe(sesso => this.booleano = sesso);
    this.servizio.getNotifiche().subscribe(notifiche => this.notifica = notifiche);
    this.servizio.getPost().subscribe(posts => this.post = posts);
    this.servizio.getAlbum().subscribe(albums => this.album = albums);
    this.servizio.getPhoto().subscribe(photos => this.foto = photos);
    this.servizio.getComment().subscribe(comments => this.commenti = comments);
    this.nomi = ['Sami', 'Paolo'];
   }

  ngOnInit() {
    setInterval(() => {
    this.notifica += 1;
    }, 5000);

  }
  changeBoolean() {
    this.booleano = ! this.booleano;
  }

}


