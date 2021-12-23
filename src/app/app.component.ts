import { Component, OnInit } from '@angular/core';
import { ControlAnswerService } from './control-answer.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public userAnswers = [];

  constructor(private controlAnswerService: ControlAnswerService) {}
  ngOnInit(): void {}

  public GetUserAnswers() {
    for (let [key, value] of this.controlAnswerService.userAnswers) {
      this.userAnswers.push(key + ' : ' + value);
    }
  }
}
