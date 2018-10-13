import { QuestionService } from './../question.service';
import { QuestionControlService } from './../question-control.service';
import { QuestionBase } from './../question-base';
import { FormDynamicService } from './../form-dynamic.service';
import { FormField } from './form-field';
import { Team } from './team';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-dynamic',
  templateUrl: './form-dynamic.component.html',
  styleUrls: ['./form-dynamic.component.css']
})
export class FormDynamicComponent implements OnInit {
  //@Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  questions: any[];

  teamEditForm: FormGroup;
  selectedTeam: Team;
  formFields: FormField[];
  constructor(private srv: FormDynamicService,
              private qcs: QuestionControlService,
              private service: QuestionService) {
    this.questions = service.getQuestions();
    this.selectedTeam = srv.getTeam();
   }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    //console.log(this.selectedTeam);
    if (this.selectedTeam) {
      this.formFields = this.srv.getFieldForForm();
      if (this.formFields && this.formFields.length > 0) {
        let controls = {};
        this.formFields.forEach(field => {
          controls[field.key] = new FormControl(this.selectedTeam[field.key]);
        });
        this.teamEditForm = new FormGroup(controls);
      } else {
        this.teamEditForm = new FormGroup({});
        //this.selectedTeam = null;
      }
    } else {
      this.teamEditForm = new FormGroup({});
    }
  }

  ngOnChanges() {
    if (this.selectedTeam) {
      this.formFields = this.srv.getFieldForForm();
      if (this.formFields && this.formFields.length > 0) {
        let controls = {};
        this.formFields.forEach(field => {
          controls[field.key] = new FormControl(this.selectedTeam[field.key]);
        });
        this.teamEditForm = new FormGroup(controls);
      } else {
        this.teamEditForm = new FormGroup({});
        //this.selectedTeam = null;
      }
    } else {
      this.teamEditForm = new FormGroup({});
    }
  }

  saveTeam() {
    console.log(JSON.stringify(this.teamEditForm.value));
    //this.selectedTeam.teamName = this.teamEditForm.value.teamName;
    for(var propertyName in this.teamEditForm.value) {
      this.selectedTeam[propertyName] = this.teamEditForm.value[propertyName];
    }
    console.log(JSON.stringify(this.selectedTeam));
    this.selectedTeam = null;
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
