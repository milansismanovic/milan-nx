import { Question } from './question'

export const MockQuestions: Question[] = [
  {
    question: "Die Regierungsform der Schweiz ist...",
    answers: [
      { id: 0, answerText: "eine Demokratie" },
      { id: 1, answerText: "eine Diktatur" },
      { id: 2, answerText: "eine totalitäre Freiheitsregierungsform" },
      { id: 3, answerText: "eine koloniale Selbstverwaltungseidgenossenschaft der UNO" },
    ],
    correctAnswer: 0
  }
];
