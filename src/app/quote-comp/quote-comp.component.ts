import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-comp',
  templateUrl: './quote-comp.component.html',
  styleUrls: ['./quote-comp.component.css']
})
export class QuoteCompComponent implements OnInit {

  quotes:Quotes[] = [
    new Quotes('Margaret: ','  Hide Yourself in God,so when a man wants to find you he will have to go there first.','Rose.W.',0,0,new Date(2019,10,24)),
    new Quotes('Serah: ', '  May we all become teachers of peace,and teach in the only way possible: by example.','Charles.G',0,0,new Date(2019,10,24)),
    new Quotes('Kush: ', '  Manners are there to be learnt by example not by rules.','Ann Wanjiku',0,0,new Date(2019,10.3))
  ];

  firstNum :number
  lastNum :number
  count: number

  addNewquote(quote){
    let quoteLength = this.quotes.length;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
    // console.log(quote);2019

  }

  deleteQuote(isComplete,index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete the Quote?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addTotal(mine,index){
    if(mine){
      this.quotes[index].upvote +=1;
    }
  }

  adTotal(isDown,index){
    if(isDown){
      this.quotes[index].upvote +=1;
    }
  }

  loopVote(){
    this.firstNum = 0
    this.lastNum = 0

    for(this.count=0 ; this.count < this.quotes.length; this.count++){
      this.lastNum = this.quotes[this.count].upvote;
      if(this.lastNum > this.firstNum){this.firstNum = this.lastNum}
    }
    return this.firstNum
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
