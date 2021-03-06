import {Component, Input} from '@angular/core';
import {ServerService} from '../../service/server.service'
import {ActivatedRoute, Params} from '@angular/router'
import {DomSanitizer} from '@angular/platform-browser';
import {MdDialog, MdDialogRef} from '@angular/material';


@Component({
  selector: 'app-multiple-choice-question',
  template: '<p>Implement me</p>',
})
export class QuestionModuleComponent {

  questionText: string;
  moduleIndex: number;
  questionIndex: number
  courseID: number;
  feedback: any;

  data: any;

  disable = false;

  constructor(public server: ServerService, public route: ActivatedRoute, public sanitizer: DomSanitizer) {
  }

  // this has to be set on every subfunction
  submit(): any {
    return 'test';
  }

  // after successful submit this function will be called to deactivate buttons
  block(): void {
    this.disable = true;
  }
}
