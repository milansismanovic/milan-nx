import { Component, OnInit } from '@angular/core';

import { Question } from "../question";

@Component({
  selector: 'milan-nx-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  questions: Question[] = [
    {
      question: "Die Regierungsform der Schweiz ist...",
      answers: [
        "eine Demokratie",
        "eine Diktatur",
        "eine totalitäre Freiheitsregierungsform",
        "eine koloniale Selbstverwaltungseidgenossenschaft der UNO"],
      correctAnswer: 0
    }
  ];

  selectedQuestion: Question = this.questions[0];


  constructor() { }

  ngOnInit() {
  }

}
