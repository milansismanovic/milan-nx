import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GameQuestionComponent } from './game-question/game-question.component';
import { GameResultComponent } from './game-result/game-result.component';

@NgModule({
  declarations: [AppComponent, GameComponent,
    GameQuestionComponent,
    GameResultComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
