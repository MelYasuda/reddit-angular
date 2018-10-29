import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailsComponent } from './details/details.component';
import { Redit } from '../models/redit.model';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  masterRedit: Redit[] = [
    new Redit("How to Program", "here is the entire list of things to do to learn how to program", 1, ["img1", "img2"], ["i love this thread", "I hate it"], 0),
    new Redit("How to Cook", "here is the entire list of things to do to learn how to program", 2, ["img1", "img2"], ["i love this thread", "I hate it"], 30),
    new Redit("How to Drive", "here is the entire list of things to do to learn how to program", 3, ["img1", "img2"], ["i love this thread", "I hate it"], 20)
  ];

}
