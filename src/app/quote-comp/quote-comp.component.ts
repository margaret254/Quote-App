import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-comp',
  templateUrl: './quote-comp.component.html',
  styleUrls: ['./quote-comp.component.css']
})
export class QuoteCompComponent implements OnInit {

  quotes:Quotes[] = [
    new Quotes('Margaret','Hide Yourself in God,so when a man wants to find you he will have to go there first.','Rose.W.',new Date(2019,10,24)),
    new Quotes('Serah', 'May we all become teachers of peace,and teach in the only way possible: by example.','Charles.G',new Date(2019,10,24))
  ];

  deleteGoal(isComplete,index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete the Quote?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
