import { TestBed, fakeAsync } from '@angular/core/testing';

import { GameStateService } from './game-state.service';
import { Question } from './question';
import { AnswerGiven } from './answer-given';

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

  it('second current question must be 1 (after calling nextQuestion())', () => {
    const service: GameStateService = TestBed.get(GameStateService);
    expect(service.getCurrentQuestionIndex()).toBe(0);
    const question: Question = service.nextQuestion();
    expect(service.getCurrentQuestionIndex()).toBe(1);
  });

  it('must be able to call getNextQuestion for getQuestionCount() times', () => {
    const service: GameStateService = TestBed.get(GameStateService);
    let count: number = 0;
    while (service.hasNextQuestion()) {
      count++;
      let question: Question = service.nextQuestion();
    }
    expect(count).toBe(service.getQuestionCount());
  });

  it('hasNextQuestion() must return true except for the last', () => {
    const service: GameStateService = TestBed.get(GameStateService);
    let count: number = 0;
    while (service.hasNextQuestion()) {
      let question: Question = service.nextQuestion();
      count = question != null ? count + 1 : count;
    }
    expect(count).toBe(service.getCurrentQuestionIndex());
  });

  it('getCurrentQuestion() must be truthy ', () => {
    const service: GameStateService = TestBed.get(GameStateService);
    let count: number = 0;
    while (service.hasNextQuestion()) {
      let question: Question = service.getCurrentQuestion();
      count++;
      expect(question).toBeTruthy();
      question = service.nextQuestion();
    }
    expect(count).toBe(service.getCurrentQuestionIndex());
  });

  it('nextQuestion() must not be null or undefined ', () => {
    const service: GameStateService = TestBed.get(GameStateService);
    let count: number = 0;
    while (service.hasNextQuestion()) {
      let question: Question = service.nextQuestion();
      expect(question).toBeTruthy();
    }
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
      service.setAnswer(0, 0);
      service.nextQuestion();
      service.setAnswer(1, 0);
      service.nextQuestion();
      while (service.hasNextQuestion()) {
        service.nextQuestion();
      }
      expect(service.getCorrectAnswerCount()).toBe(2);
    }
  });

  it('randomInt(i,j) must return integers n>=i and n<=j', () => {
    const service: GameStateService = TestBed.get(GameStateService);
    for (let i: number = 0; i < 100; i++) {
      let rand = service.randomInt(1, 10);
      expect(rand >= 1 && rand <= 10).toBeTruthy();
    }
  });

  it('randomizeQuestions() randomizes questions', () => {
    const service: GameStateService = TestBed.get(GameStateService);
    const firstQuestion: Question = service.getQuestion(0);
    const secondQuestion: Question = service.getQuestion(1);
    service.randomizeQuestions();

    // check if at least one of the two questions are different
    expect(firstQuestion === service.getQuestion(0) && secondQuestion === service.getQuestion(1)).toBeFalsy();
  });

  it('randomizeQuestions() randomizes answers', () => {
    const service: GameStateService = TestBed.get(GameStateService);
    service.randomizeQuestions();

    // check if the order of the questions has changed by checking if at least one answer is not 0 as this is how they are initialized
    let notOnZeroPosition = false;
    const n = service.getQuestionCount();
    for (let i = 0; i < n; i++) {
      const q: Question = service.getQuestion(i);
      if (q.answers[0].id != 0) {
        notOnZeroPosition = true;
        break;
      }
    }
    expect(notOnZeroPosition).toBeTruthy();
  });

  it('getAnswer(i) must return same value x that was set with setAnswer(i,x)', () => {
    const service: GameStateService = TestBed.get(GameStateService);
    const answerIndex = 1;

    service.gameState.answersGiven[answerIndex] = { answerId: 3 };

    service.setAnswer(answerIndex, 2);
    let answer: AnswerGiven = service.getAnswer(answerIndex);
    expect(answer.answerId).toBe(2);
  });


});
