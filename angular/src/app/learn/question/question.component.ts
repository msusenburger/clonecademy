import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { ServerService } from "../../service/server.service"
import {MdDialog} from '@angular/material';

import {TranslateService} from '@ngx-translate/core';

import { MultipleChoiceQuestionComponent } from "../multiple-choice-question/multiple-choice-question.component"
import { InformationTextComponent } from "../info-text/info-text.component"


import { WrongFeedbackComponent } from './wrong-feedback/wrong-feedback.component';
import { CorrectFeedbackComponent } from './correct-feedback/correct-feedback.component';
import { QuestionModule } from "./question.module";

import { QuestionDictionary } from '../question-dictionary';



@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  // QUESTION FACTORY COMPONENT
  components = QuestionDictionary.components

  @ViewChild('question', {read: ViewContainerRef}) question: ViewContainerRef;
  moduleIndex: number;
  courseID: number;
  questionIndex: number;
  // Module variables
  title: string;
  learning_text: string;

  questionBody: string;
  questionFactory: ComponentFactory<any>;
  questionModule: QuestionModule;
  lastQuestion: boolean;
  lastModule: boolean;
  submitSend: boolean;
  submitCorrect: boolean;
  correctFeedback: string;
  wrongFeedback: string;
  feedbackIterator = 0;

  constructor(
    private translate: TranslateService,
    private changeDet: ChangeDetectorRef,
    private router: Router,
    public server: ServerService,
    private route: ActivatedRoute,
    private factory: ComponentFactoryResolver,
    private dialog: MdDialog
  ) {
    this.route.params.subscribe((data: Params) => {
      this.courseID = Number(data.id);
      this.moduleIndex = Number(data.module);
      this.questionIndex = data.question;
    })
    this.loadQuestion();

  }

  ngOnInit(){

  }

  loadQuestion(){
    this.server.get("courses/"+this.courseID+"/"+ (Number(this.moduleIndex) -1) + "/" + (Number(this.questionIndex) - 1 )).then(data => {
      this.submitCorrect = false;
      this.title = data['title']
      this.questionBody = data['body']
      this.lastQuestion = data['last_question']
      this.lastModule = data['last_module']
      this.learning_text = data['learning_text']

      // create Question based on the class
      this.questionFactory = this.factory.resolveComponentFactory(this.components[data['type']])

      // empty question factory box bevor adding new stuff
      if(this.question.length > 0){
        this.question.clear()

      }
      // load the current question Type on the screen
      let question = this.question.createComponent(this.questionFactory)
      this.questionModule = (<QuestionModule> question.instance)
      // give the question its data
      this.questionModule.data = data['question_body']
      this.changeDet.detectChanges()
    })
  }


  submit(){


    let data = {answers: this.questionModule.submit()};
    this.server.post("courses/"+this.courseID+"/"+ (Number(this.moduleIndex) -1 ) + "/" + (Number(this.questionIndex) -1), data)
      .then(data => this.evaluteAnswer(data))
      .catch(err => console.log(err))
  }

  evaluteAnswer(data){

    this.submitCorrect = data['evaluate']
    this.submitSend = true;

    if(this.submitCorrect){
      // calls block to freeze the question element
      this.questionModule.block();
      this.questionModule.feedback = data.custom_feedback

      // the answer is correct and the correct Feedback will be set
      if(data['feedback'] != ""){
        this.correctFeedback = data['feedback']
      }
      else{
        this.translate.get("correct feedback").subscribe(data => {this.correctFeedback = data})
      }
    }
    else{
      this.feedbackIterator = (this.feedbackIterator + 1) % 3;
      // answer was wrong and the wrong Feedback will be setup
      let text = "";
      this.translate.get("wrong feedback " + this.feedbackIterator).subscribe(data => {text = data})
      let dialogRef = this.dialog.open(WrongFeedbackComponent, {
        data: {
          text: text
        }
      })
    }
  }

  next(){
    // if this is not the last question of a module add 1 to the index
    if(!this.lastQuestion){
      this.questionIndex ++;
    }
    // if this is the last Question but not the last module add one to module and start the question counter at 1
    else if(!this.lastModule){
      this.moduleIndex ++;
      this.questionIndex = 1;
    }
    else{
      // TODO add a feedback for the course here
      this.router.navigateByUrl("/course")
      return;
    }
    this.router.navigateByUrl("/course/"+this.courseID+"/"+ this.moduleIndex + "/" + this.questionIndex)
    this.submitSend = false;
    this.loadQuestion()
  }

}
