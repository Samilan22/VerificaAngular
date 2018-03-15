import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class ServiziomessaggiService {

  messages: string[] = [];
  constructor() { }

  get(): Observable<string[]> {
    return of(this.messages);
  }
  add(message: string) {
    this.messages.push(message);
  }
  clear() {
    this.messages = [];
  }
}
