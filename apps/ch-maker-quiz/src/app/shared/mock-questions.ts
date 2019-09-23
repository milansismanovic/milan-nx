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
  },
  {
    question: "Was ist der höchste Punkt der Schweiz?",
    answers: [
      { id: 0, answerText: "Dufourspitze" },
      { id: 1, answerText: "Jungfraujoch" },
      { id: 2, answerText: "Säntis" },
      { id: 3, answerText: "Pilatus" },
    ],
    correctAnswer: 0
  },
  {
    question: "Welche Kammer des Bundesparlaments ist nach der Bevölkerungsstärke der Kantone zusammengesetzt?",
    answers: [
      { id: 0, answerText: "Der Nationalrat" },
      { id: 1, answerText: "Der Bundesrat" },
      { id: 2, answerText: "Der Ständerat" },
      { id: 3, answerText: "Der Kantonsrat" },
    ],
    correctAnswer: 0
  },
  {
    question: "Was ist der bevölkerungsreichste Kanton der Schweiz?",
    answers: [
      { id: 0, answerText: "Zürich" },
      { id: 1, answerText: "Bern" },
      { id: 2, answerText: "Aargau" },
      { id: 3, answerText: "Waadt" },
    ],
    correctAnswer: 0
  },
];
