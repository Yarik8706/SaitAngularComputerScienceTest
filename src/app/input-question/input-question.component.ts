import { Component, OnInit, Input } from '@angular/core';
import { ControlAnswerService } from '../control-answer.service';

@Component({
  selector: 'app-input-question',
  templateUrl: './input-question.component.html',
  styleUrls: ['./input-question.component.css'],
})
export class InputQuestionComponent implements OnInit {
  @Input() title: string;
  @Input() stringTrueAnswers: string;
  public trueAnswers: string;
  public inputElement: string | string[];

  constructor(private controlAnswerService: ControlAnswerService) {}

  ngOnInit() {
    this.trueAnswers = JSON.parse(this.stringTrueAnswers);
    this.controlAnswerService.AddUserAnswer(this.title, false);
  }

  setUserAnswer(): void {
    let count = 0;
    for (let trueAnswer of this.trueAnswers) {
      if (this.inputElement.includes(trueAnswer)) {
        count++;
      }
    }
    if (count >= 2) {
      this.controlAnswerService.AddUserAnswer(this.title, true);
    } else {
      this.controlAnswerService.AddUserAnswer(this.title, false);
    }
  }
}
