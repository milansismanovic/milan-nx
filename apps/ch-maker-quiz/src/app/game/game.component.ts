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
        { id: 0, answerText: "eine Demokratie" },
/*
 { id: 1, answerText: "eine Diktatur" },
        { id: 2, answerText: "eine totalitäre Freiheitsregierungsform" },
        { id: 3, answerText: "eine koloniale Selbstverwaltungseidgenossenschaft der UNO" },
        */
        ]
      correctAnswer: 0
    }
  ];

  selectedQuestion: Question = this.questions[0];


  constructor() { }

  ngOnInit() {
  }

}
