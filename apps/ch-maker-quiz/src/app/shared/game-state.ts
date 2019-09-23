import { Question } from './question';
import { AnswerGiven } from './answer-given';

export class GameState {
  questions: Question[];
  answersGiven: AnswerGiven[];
  currentQuestion: number;
}
