import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-question',
  templateUrl: './input-question.component.html',
  styleUrls: ['./input-question.component.css'],
})
export class InputQuestionComponent implements OnInit {
  @Input() title: string;
  @Input() trueAnswer: string;

  constructor() {}

  ngOnInit() {}
}
