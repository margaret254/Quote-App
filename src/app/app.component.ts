import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Quotes App';
  quote:Quotes[] = [
    {name:'Margaret', quote:'Hide Yourself in God,so when a man wants to find you he will have to go there first.'},
    {name:'Serah', quote:'May we all become teachers of peace,and teach in the only way possible: by example.'}
  ];
}
