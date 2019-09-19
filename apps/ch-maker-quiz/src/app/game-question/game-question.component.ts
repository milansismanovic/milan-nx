import { Component, OnInit, Input } from '@angular/core';

import { Question } from '../question';

@Component({
  selector: 'milan-nx-game-question',
  templateUrl: './game-question.component.html',
  styleUrls: ['./game-question.component.scss']
})
export class GameQuestionComponent implements OnInit {
  @Input() question: Question;

  constructor() { }

  ngOnInit() {
  }

  setAnswer() {
    window.alert('Eine Antwort wurde gegeben.');
      console.log(this.question);
  }
}
