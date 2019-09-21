import { Component, OnInit } from '@angular/core';

import { Question } from "../shared/question";
import { MockQuestions } from "../shared/mock-questions";

@Component({
  selector: 'milan-nx-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  questions: Question[] = MockQuestions;

  selectedQuestion: Question = this.questions[0];


  constructor() { }

  ngOnInit() {
  }

}
