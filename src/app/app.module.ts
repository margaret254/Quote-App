import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuoteCompComponent } from './quote-comp/quote-comp.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteCompComponent,
    QuoteDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
