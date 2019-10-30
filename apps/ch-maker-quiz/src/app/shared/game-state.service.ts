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
    this.resetAnswers();
  }

  resetAnswers() {
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

  randomizeQuestions() {
    // randomize question order using the
    // swap questions positions using the 'Fisher-Yates shuffle'
    for (let i: number = this.getQuestionCount() - 1; i > 0; i--) {
      const j: number = this.randomInt(0, i);
      const x: Question = this.gameState.questions[i];
      this.gameState.questions[i] = this.gameState.questions[j];
      this.gameState.questions[j] = x;
    }

    // randomize answer order within questions
    for (let k: number = this.getQuestionCount() - 1; k > 0; k--) {
      const q: Question = this.gameState.questions[k];
      const answers: { id: Number; answerText: String; }[] = q.answers;
      for (let i: number = answers.length - 1; i > 0; i--) {
        const j: number = this.randomInt(0, i-1);
        const x = answers[i];
        answers[i] = answers[j];
        answers[j] = x;
        /*
        if (i === q.correctAnswer)
          q.correctAnswer = j;
        else if (j === q.correctAnswer)
          q.correctAnswer = i;
        */
      }
    }
  }

  public getCurrentQuestion(): Question {
    const question: Question = this.gameState.questions[this.gameState.currentQuestion];
    return question;
  }

  public hasNextQuestion(): boolean {
    return this.gameState.currentQuestion < this.gameState.questions.length;
  }

  public nextQuestion(): Question {
    if (this.hasNextQuestion()) {
      return this.gameState.questions[this.gameState.currentQuestion++];
    } else {
      return null;
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

  public answeredCount(): number {
    return this.gameState.answersGiven.filter(answer => answer.answerId > -1).reduce((sum, answer) => sum + 1, 0);
  }

  public getCorrectAnswerCount(): number {
    const n: number = this.gameState.questions.length;
    let correctAnswerCount = 0;
    for (let i = 0; i < n; i++) {
      if (this.gameState.answersGiven[i].answerId === this.gameState.questions[i].correctAnswer) {
        correctAnswerCount++;
      }
    }
    return correctAnswerCount;
  }

  public setAnswer(questionId: number, answerIndex: Number) {
    // Object.assign(K:a1,b1,c1, L:b2,d2) >> K: a1, b2, c1, d2 // EVIL
    // Object.assign({}, K:a1,b1,c1, L:b2,d2) >> N: a1, b2, c1, d2 // GOOD but long
    // {...K, ...L}

    //const a: AnswerGiven = { answerId: answerIndex};
    //this.gameState.answersGiven[questionId] = {...this.gameState.answersGiven[questionId], answerId: answerIndex};
    this.gameState.answersGiven[questionId] = { answerId: answerIndex };
  }

  public getAnswer(answerIndex: number): AnswerGiven{
    const answer: AnswerGiven = this.gameState.answersGiven[answerIndex];
    return answer;
  }

  public newGame() {
    this.resetAnswers();
    this.gameState.currentQuestion = 0;
    this.randomizeQuestions();
  }
}
