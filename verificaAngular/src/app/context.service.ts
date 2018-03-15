import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Persona } from './model/model';
import { ServiziomessaggiService } from './serviziomessaggi.service';
import { NumberSymbol } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ContextService {

  private titile: string;
  private url_post: string;
  private url_commenti: string;
  private url_album: string;
  private url_photo: string;
  post: number;
  comments: number;
  albums: number;
  photos: number;

  private nomeVariabili: Persona = new Persona();


  nome: string;
  numeroTel: number;
  sesso: boolean;
  notifiche: number;


  constructor(private http: HttpClient) {
    this.url_post = 'https://jsonplaceholder.typicode.com/posts';
    this.url_commenti = 'https://jsonplaceholder.typicode.com/comments';
    this.url_album = 'https://jsonplaceholder.typicode.com/albums';
    this.url_photo = 'https://jsonplaceholder.typicode.com/photos';
    this.post = null;
    this.nome = 'Sami Arrom';
    this.numeroTel = 3664663200;
    this.sesso = null;
    this.notifiche = null;
  }

  getPost(): Observable <number> {
    return of(this.post);
  }
  getComment(): Observable <number> {
    return of(this.comments);
  }
  getAlbum(): Observable <number> {
    return of(this.albums);
  }
  getPhoto(): Observable <number> {
    return of(this.photos);
  }


  getNome(): Observable <string> {
    return of (this.nome);
  }
  setNome (app: string) {
     this.nome = app;
  }
  getNotifiche(): Observable <number> {
    return of(this.notifiche);
    }
  setNotifiche(app: number) {
    this.notifiche = app;
  }
  getNumTel(): Observable <number> {
    return of (this.numeroTel);
  }
  setNumTel (app) {
     this.numeroTel = app;
  }
  getSesso(): Observable <boolean> {
    return of(this.sesso);
  }
  setSesso (app) {
     this.sesso = app;
  }
  getElementi(): Observable <Persona> {
    return of(this.nomeVariabili);
  }
}
