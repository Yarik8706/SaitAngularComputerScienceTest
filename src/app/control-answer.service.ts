import { Injectable } from '@angular/core';

@Injectable()
export class ControlAnswerService {
  public userAnswers = new Map();;

  constructor() {}

  public AddUserAnswer(title: string, userAnswer: boolean): void {
    this.userAnswers.set(title, userAnswer);
  }
}
