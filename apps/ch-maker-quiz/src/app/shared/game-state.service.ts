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
    // initialize answersGiven with empty answers
    const n: number = this.gameState.questions.length;
    const noAnswerYet: AnswerGiven = { answerId: -1 };
    this.gameState.answersGiven = new Array(n).fill(noAnswerYet);
  }

  randomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public randomizeQuestions() {
    // randomize question order using the 
    // swap questions positions 100 times
    for (let i: number = this.getQuestionCount() - 1; i > 0; i--) {
      let j: number = this.randomInt(0, i);
      let x: Question = this.gameState.questions[i];
      this.gameState.questions[i] = this.gameState.questions[j];
      this.gameState.questions[j] = x;
    }

    // randomize answer order within questions
    for (let k: number = this.getQuestionCount() - 1; k > 0; k--) {
      let q: Question = this.gameState.questions[k];
      let answers: { id: Number; answerText: String; }[] = q.answers;
      for (let i: number = answers.length - 1; i > 0; i--) {
        let j: number = this.randomInt(0, i-1);
        let x = answers[i];
        answers[i] = answers[j];
        answers[j] = x;
        if (i === q.correctAnswer)
          q.correctAnswer = j;
        else if (j === q.correctAnswer)
          q.correctAnswer = i;
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
    if (i < 0 || i >= this.getQuestionCount()) {
      return null;
    }
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

  public setAnswer(questionId: number, answerIndex: Number) {
    console.log(this.gameState.answersGiven);
    this.gameState.answersGiven[questionId].answerId = answerIndex;
    console.log(this.gameState.answersGiven);
  }

  public getAnswer(answerIndex: number): AnswerGiven{
    const answer: AnswerGiven = this.gameState.answersGiven[answerIndex];
    console.log(answer);
    return answer;
  }
}
