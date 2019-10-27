import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-comp',
  templateUrl: './quote-comp.component.html',
  styleUrls: ['./quote-comp.component.css']
})
export class QuoteCompComponent implements OnInit {

  quotes:Quotes[] = [
    {name:'Margaret', quoteName:'Hide Yourself in God,so when a man wants to find you he will have to go there first.',author:'Rose.W.'},
    {name:'Serah', quoteName:'May we all become teachers of peace,and teach in the only way possible: by example.',author:'Charles.G'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
