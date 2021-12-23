import { Component, Input, OnInit } from '@angular/core';
import { ControlAnswerService } from '../control-answer.service';

@Component({
  selector: 'app-change-question',
  templateUrl: './change-question.component.html',
  styleUrls: ['./change-question.component.css'],
})
export class ChangeQuestionComponent implements OnInit {
  @Input() title: string;
  @Input() trueAnswer: string;
  @Input() StringAnswers: string;

  public Answers: string[];
  public userAnswer: string;
  private answersElement: NodeListOf<HTMLElement>;

  constructor(private controlAnswerService: ControlAnswerService) {}

  ngOnInit() {
    this.answersElement = document.getElementsByName('answers');
    this.Answers = JSON.parse(this.StringAnswers);
    this.controlAnswerService.AddUserAnswer(this.title, false);
  }

  public setUserAnswer(value: string): void {
    this.userAnswer = value;
    console.log('sdfdfad');
    if (value == this.trueAnswer) {
      this.controlAnswerService.AddUserAnswer(this.title, true);
    } else {
      this.controlAnswerService.AddUserAnswer(this.title, false);
    }
  }
}
