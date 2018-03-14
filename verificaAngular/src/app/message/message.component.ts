import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})



export class MessageComponent implements OnInit {
  private messages: string[] = [];
  constructor() { }

  ngOnInit() {
  }

}
