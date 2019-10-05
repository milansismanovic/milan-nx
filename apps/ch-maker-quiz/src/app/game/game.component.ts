import { Component, OnInit, Input } from '@angular/core';

import { Question } from "../shared/question";
import { GameStateService } from '../shared/game-state.service';
import { AnswerGiven } from '../shared/answer-given';

@Component({
  selector: 'milan-nx-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() answer: number;

  constructor(private gameStateService: GameStateService) { }

  ngOnInit() {
    let q: Question = this.gameStateService.getCurrentQuestion();
    console.log(q);
  }

  onAnswered(answer: AnswerGiven) {
    console.log(answer);
    console.log(this.gameStateService.getAnswer(this.gameStateService.getCurrentQuestionIndex()));
    this.gameStateService.setAnswer(this.gameStateService.getCurrentQuestionIndex(), answer.answerId);
    console.log(this.gameStateService.getAnswer(this.gameStateService.getCurrentQuestionIndex()));

    this.gameStateService.nextQuestion();
  }

}
