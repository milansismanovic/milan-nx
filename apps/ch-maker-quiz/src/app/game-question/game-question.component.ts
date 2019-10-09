import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Question } from '../shared/question';
import { AnswerGiven } from '../shared/answer-given';

@Component({
  selector: 'milan-nx-game-question',
  templateUrl: './game-question.component.html',
  styleUrls: ['./game-question.component.scss']
})
export class GameQuestionComponent {
  @Input() question: Question;
  @Output() answered = new EventEmitter<AnswerGiven>();

  setAnswer(answerId: Number) {
    let answer: AnswerGiven = { answerId: answerId };
    this.answered.emit(answer);
  }
}
