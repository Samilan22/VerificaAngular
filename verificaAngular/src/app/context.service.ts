import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Persona } from './model/model';

@Injectable()
export class ContextService {
  private nomeVariabili: Persona = new Persona();

  nome: string;
  numeroTel: number;
  sesso: boolean;

  constructor() {
    this.nome = 'Sami Arrom';
    this.numeroTel = 3664663200;
    this.sesso = null;
  }
  getNome(): Observable <string> {
    return of (this.nome);
  }
  setNome (app: string) {
     this.nome = app;
  }
  getNumTel(): Observable <number> {
    return of (this.numeroTel);
  }
  setNumTel (app) {
     this.nome = app;
  }
  getSesso(): Observable <boolean> {
    return of(this.sesso);
  }
  setSesso (app) {
     this.nome = app;
  }
  getElementi(): Observable <Persona> {
    return of(this.nomeVariabili);
  }
}
