import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomonQuestionComponent } from './homon-question/homon-question.component';
import { ChangeQuestionComponent } from './change-question/change-question.component';
import { InputQuestionComponent } from './input-question/input-question.component';
import { BaseQuestionComponent } from './base-question.component';
import { ControlAnswerService } from './control-answer.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HomonQuestionComponent,
    ChangeQuestionComponent,
    InputQuestionComponent,
    BaseQuestionComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ControlAnswerService],
})
export class AppModule {}
