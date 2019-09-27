import { TestBed, fakeAsync } from '@angular/core/testing';

import { GameStateService } from './game-state.service';
import { Question } from './question';

describe('GameStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameStateService = TestBed.get(GameStateService);
    expect(service).toBeTruthy();
  });

  it('question count must be >0', () => {
    const service: GameStateService = TestBed.get(GameStateService);
    expect(service.getQuestionCount()).toBeGreaterThan(0);
  });

  it('first current question must be 0', () => {
    const service: GameStateService = TestBed.get(GameStateService);
    expect(service.getCurrentQuestionIndex()).toBe(0);
    expect(service.getCurrentQuestion).toBeDefined();
  });

  it('second current question must be 1', () => {
    const service: GameStateService = TestBed.get(GameStateService);
    expect(service.getCurrentQuestionIndex()).toBe(0);
    const question: Question = service.nextQuestion();
    expect(service.getCurrentQuestionIndex()).toBe(1);
  });

  it('must be able to call getNextQuestion for getQuestionCount() times', () => {
    const service: GameStateService = TestBed.get(GameStateService);
    var count: number = 0;
    while (service.hasNextQuestion()) {
      count++;
      let question: Question = service.nextQuestion();
    }
    expect(count).toBe(service.getQuestionCount());
  });

  it('hasNextQuestion() must return true except for the last', () => {
    const service: GameStateService = TestBed.get(GameStateService);
    var count: number = 0;
    while (service.hasNextQuestion()) {
      let question: Question = service.nextQuestion();
      count = question != null ? count + 1 : count;
    }
    expect(count).toBe(service.getCurrentQuestionIndex());
  });

  it('getCurrentQuestion() must be truthy ', () => {
    const service: GameStateService = TestBed.get(GameStateService);
    var count: number = 0;
    while (service.hasNextQuestion()) {
      let question: Question = service.getCurrentQuestion();
      expect(question).toBeTruthy();
      question = service.nextQuestion();
      count = question != null ? count + 1 : count;
    }
    expect(count).toBe(service.getCurrentQuestionIndex());
  });

  it('getQuestion(i) must return truthy for 0<=i<count', () => {
    const service: GameStateService = TestBed.get(GameStateService);
    for (let i: number = 0; i < service.getQuestionCount(); i++) {
      expect(service.getQuestion(i)).toBeTruthy();
    }
  });

  it('game must return the correct right answer count', () => {
    const service: GameStateService = TestBed.get(GameStateService);
    if (service.getQuestionCount() >= 2)
      return;
    else {
      // answer first two correct
      // assume correct answer is 0
      service.setAnswer(0);
      service.nextQuestion();
      service.setAnswer(0);
      service.nextQuestion();
      while (service.hasNextQuestion()) {
        service.nextQuestion();
      }
      expect(service.getCorrectAnswerCount()).toBe(2);
    }
  });

  it('randomizeQuestions() randomizes questions', () => {
    const service: GameStateService = TestBed.get(GameStateService);
    const firstQuestion: Question = service.getQuestion(0);
    const secondQuestion: Question = service.getQuestion(1);
    service.randomizeQuestions();

    // check if at least one of the two questions are different
    expect(firstQuestion === service.getQuestion(0) && secondQuestion === service.getQuestion(1)).toBeFalsy();

    // check if the order of the questions has changed by checking if at least one answer is not 0 as this is how they are initialized
    var notOnZeroPosition = false;
    const n = service.getQuestionCount();
    for (let i = 0; i < n; i++) {
      const q: Question = service.getQuestion(i);
      // TODO check how q could be undefined
      if (q === null || q === undefined)
        continue;
      console.log("1 i " + i + ", corect answer " + q.correctAnswer + " q: " + q + ", bool " + notOnZeroPosition + ", answers: " + q.answers);
      const a: number = q.correctAnswer;
      if (a != 0) {
        notOnZeroPosition = true;
        console.log("question is undefined");
        break;
      }
    }
    expect(notOnZeroPosition).toBeTruthy();
  });

});
