export class Question{
  id: number;
  question: String;
  answers: { id: Number; answerText: String;}[];
  correctAnswer: number;
}
