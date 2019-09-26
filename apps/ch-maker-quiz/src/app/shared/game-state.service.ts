import { Injectable } from '@angular/core';

import { GameState } from './game-state';
import { MockQuestions } from './mock-questions';
import { Question } from './question';
import { AnswerGiven } from './answer-given';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  gameState: GameState = {
    questions: MockQuestions,
    answersGiven: [],
    currentQuestion: 0,
  };
  
  constructor() {
    const n: number = this.gameState.questions.length;
    const noAnswerYet: AnswerGiven = { answerId: 0 };
    for (let i: number = 0; i < n; i++) {
      this.gameState.answersGiven.push(noAnswerYet);
    }
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  public randomizeQuestions() {
    // randomize question order using the 
    // swap questions positions 100 times
    for (let i: number = this.getQuestionCount(); i > 0; i--) {
      let j: number = this.getRandomInt(0, i);
      let x: Question = this.gameState.questions[i];
      this.gameState.questions[i] = this.gameState.questions[j];
      this.gameState.questions[j] = x;
    }

    // randomize answer order within questions
    for (let k: number = this.getQuestionCount(); k > 0; k--) {
      const a = this.gameState.questions[k].answers;
      let array: { id: Number; answerText: String; }[] = this.gameState.questions[k].answers;
      for (let i: number = array.length; i > 0; i--) {
        let j: number = this.getRandomInt(0, i);
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }

  public getCurrentQuestion(): Question {
    let question: Question = this.gameState.questions[this.gameState.currentQuestion];
    return question;
  }

  public hasNextQuestion(): boolean {
    return this.gameState.currentQuestion < this.gameState.questions.length;
  }

  public nextQuestion(): Question {
    if (this.hasNextQuestion()) {
      return this.gameState.questions[this.gameState.currentQuestion++];
    } else {
      null;
    }
  }

  public getQuestion(i: number): Question {
    return this.gameState.questions[i];
  }

  public getCurrentQuestionIndex(): number {
    return this.gameState.currentQuestion;
  }

  public getQuestionCount(): number {
    return this.gameState.questions.length;
  }

  public getCorrectAnswerCount(): number {
    let n: number = this.gameState.questions.length;
    let correctAnswerCount: number = 0;
    for (let i: number = 0; i < n; i++) {
      if (this.gameState.answersGiven[i].answerId == this.gameState.questions[i].correctAnswer) {
        correctAnswerCount++;
      }
    }
    return correctAnswerCount;
  }

  public setAnswer(answerIndex: number) {
    console.log(this.gameState.answersGiven[this.getCurrentQuestionIndex()]);
    this.gameState.answersGiven[this.getCurrentQuestionIndex()].answerId = answerIndex;
  }
}
