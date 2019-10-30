import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'milan-nx-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.scss']
})
export class GameResultComponent implements OnInit {
  @Input() correctAnswerCount: number;
  @Input() answeredCount: number;
  @Input() totalAnswerCount: number;

  constructor() { }

  ngOnInit() {
  }

}
