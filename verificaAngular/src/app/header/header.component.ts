import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../model/model';
import { ContextService } from '../context.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  frase: string;
  numero: number;
  booleano: boolean;
  @Input() saluto: string;
  nomi: string[];

  constructor(private servizio: ContextService) {
    this.servizio.getNome().subscribe(nome => this.frase = nome);
    this.servizio.getNumTel().subscribe(numeroTel => this.numero = numeroTel);
    this.servizio.getSesso().subscribe(sesso => this.booleano = sesso);
    this.nomi = ['Sami', 'Paolo', 'Giovanni', 'Aldo Baglio', 'Giacomo Poretti'];
   }

  ngOnInit() {
  }
  changeBoolean() {
    this.booleano = ! this.booleano;
  }

}


