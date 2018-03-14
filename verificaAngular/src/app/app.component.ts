import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Arrom';
  name = 'Sami';
  public saluto: string;

 sendToHeader(appoggio: string) {
   console.log(appoggio);
    this.saluto = appoggio;
  }
}

