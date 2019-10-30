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
    this.gameStateService.newGame();
  }

  onAnswered(answer: AnswerGiven) {
    this.gameStateService.setAnswer(this.gameStateService.getCurrentQuestionIndex(), answer.answerId);
    this.gameStateService.nextQuestion();
  }

  service(): GameStateService {
    return this.gameStateService;
  }
}
