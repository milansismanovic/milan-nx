import { Question } from './question'

// convention for the unit tests: first question is always the correct one
export const MockQuestions: Question[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
    question: "Was ist der bevölkerungsreichste Kanton der Schweiz?",
    answers: [
      { id: 0, answerText: "Zürich" },
      { id: 1, answerText: "Bern" },
      { id: 2, answerText: "Aargau" },
      { id: 3, answerText: "Waadt" },
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "Welches Jahr gilt als das Geburtsjahr der modernen Schweiz?",
    answers: [
      { id: 0, answerText: "1848" },
      { id: 1, answerText: "1291" },
      { id: 2, answerText: "1971" },
      { id: 3, answerText: "1969" },
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "Welcher Kanton ist ein Urkanton?",
    answers: [
      { id: 0, answerText: "Unterwalden" },
      { id: 1, answerText: "Uri" },
      { id: 2, answerText: "Luzern" },
      { id: 3, answerText: "Zug" },
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "Was ist der höchste Bahnhof von der Schweiz und von Europas?",
    answers: [
      { id: 0, answerText: "Jungfraujoch" },
      { id: 1, answerText: "Interlaken Ost" },
      { id: 2, answerText: "Davos" },
      { id: 3, answerText: "Samnaun" },
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "Wieviele Kantöne hat die Schweiz?",
    answers: [
      { id: 0, answerText: "26" },
      { id: 1, answerText: "23" },
      { id: 2, answerText: "24" },
      { id: 3, answerText: "25" },
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "Wie heisst die erste Bundesrätin der Schweiz?",
    answers: [
      { id: 0, answerText: "Elisabeth Kopp" },
      { id: 1, answerText: "Ruth Dreifuss" },
      { id: 2, answerText: "Christiane Brunner" },
      { id: 3, answerText: "Ruth Metzler" },
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "Wann wurde das Frauenwahlrecht eingeführt?",
    answers: [
      { id: 0, answerText: "1971" },
      { id: 1, answerText: "1872" },
      { id: 2, answerText: "1921" },
      { id: 3, answerText: "1907" },
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "In welche 3 Gewalten ist die Schweiz aufgeteilt?",
    answers: [
      { id: 0, answerText: "Bundesrat, Parlament, Bundesgericht" },
      { id: 1, answerText: "Polizei, Armee und Gerichte" },
      { id: 2, answerText: "Bund, Kanton und Gemeinde" },
      { id: 3, answerText: "Deutschweiz, Welschland und Tessin" },
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    question: "Wann ist die Scheiz der UNO beigetreten?",
    answers: [
      { id: 0, answerText: "2002" },
      { id: 1, answerText: "1996" },
      { id: 2, answerText: "1945" },
      { id: 3, answerText: "1949" },
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "Was ist eine Volksinitiative?",
    answers: [
      { id: 0, answerText: "Mit dem Instrument der Volksinitiative entscheidet das Stimmvolk über die Aufnahme einer neuen Bestimmung in die Verfassung oder das Gesetz." },
      { id: 1, answerText: "Wenn das Parlament mit einer Mehrheit einer Gesetzesvorlage zustimmt, muss diese Initiative vom Volk bestätigt werden." },
      { id: 2, answerText: "Wenn das Parlament mit einer Mehrheit Krediten über 10 Milliarden zustimmt, muss diese Initiative vom Volk bestätigt werden." },
      { id: 3, answerText: "Mit der Volksinitiative können die deutsche, französische, italienische oder romanische sprechende Bevölkerung einen Kredit von der Nationalbank beziehen." },
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    question: "Wer wählt den Präsidenten der Schweiz?",
    answers: [
      { id: 0, answerText: "Der Bundespräsident wird jährlich von der vereinigten Bundesversammlung gewählt." },
      { id: 1, answerText: "Der Bundespräsident wird alle vier Jahre nach der der Parlamentswahl vom Nationalrat bestimmt." },
      { id: 2, answerText: "Der Bundespräsident wird vom Volk gewählt." },
      { id: 3, answerText: "Der Bundespräsident wird von der grössten Partei vom Nationalrat bestimmt." },
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    question: "Wer wählt die Bundesrichter der Schweiz?",
    answers: [
      { id: 0, answerText: "Die Bundesrichter werden von der vereinigten Bundesversammlung gewählt." },
      { id: 1, answerText: "Die Bundesrichter werden alle vier Jahre nach der der Parlamentswahl vom Nationalrat bestimmt." },
      { id: 2, answerText: "Die Bundesrichter werden vom Volk gewählt." },
      { id: 3, answerText: "Die Bundesrichter werden von der grössten Partei vom Nationalrat bestimmt." },
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    question: "Welches ist der flächenmässig grösste Kanton?",
    answers: [
      { id: 0, answerText: "Graubünden" },
      { id: 1, answerText: "Bern" },
      { id: 2, answerText: "Waadt" },
      { id: 3, answerText: "Wallis" },
    ],
    correctAnswer: 0
  },
  {
    id: 17,
    question: "Wer darf in der Schweiz auf Bundesebene wählen und abstimmen?",
    answers: [
      { id: 0, answerText: "Personen, die mindestens 18 jährig und Schweizer sind und nicht entmündigt sind." },
      { id: 1, answerText: "Personen, die in der Schweiz geboren worden sind." },
      { id: 2, answerText: "Personen, die mindestens 18 jährig sind und in der Schweiz mehr als 10 Jahre wohnen." },
      { id: 3, answerText: "Personen, die Steuern bezahlen." },
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    question: "Wieviele Halbkantone gibt es?",
    answers: [
      { id: 0, answerText: "6" },
      { id: 1, answerText: "3" },
      { id: 2, answerText: "4" },
      { id: 3, answerText: "12" },
    ],
    correctAnswer: 0
  },
];
