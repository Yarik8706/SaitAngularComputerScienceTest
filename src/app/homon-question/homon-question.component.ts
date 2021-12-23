import { Component, Input, OnInit } from '@angular/core';
import { ControlAnswerService } from '../control-answer.service';

@Component({
  selector: 'app-homon-question',
  templateUrl: './homon-question.component.html',
  styleUrls: ['./homon-question.component.css'],
})
export class HomonQuestionComponent implements OnInit {
  @Input() title: string;
  @Input() stringTrueAnswer: string;
  trueAnswer: boolean;

  constructor(private controlAnswerService: ControlAnswerService) {}

  ngOnInit() {
    if (this.stringTrueAnswer == 'true') {
      this.trueAnswer = true;
    } else {
      this.trueAnswer = false;
    }
    this.controlAnswerService.AddUserAnswer(this.title, false);
  }

  setUserAnswer(value: boolean) {
    this.controlAnswerService.AddUserAnswer(this.title, value);
  }
}
