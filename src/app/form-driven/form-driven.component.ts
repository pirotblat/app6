import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form-driven',
  templateUrl: './form-driven.component.html',
  styleUrls: ['./form-driven.component.css']
})
export class FormDrivenComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue'];
  userModel = new User(1, 'Pini Rotblat', 'pirotblat@gmail.com', '050-8283825', 'default', 'morning', true);
  topicHasError = true;
  submitted = false;
  errorMsg = '';

  constructor(private srv: DataService) { }

  ngOnInit() {
  }

  validateTopic(value) {
    if (value === 'default')
      this.topicHasError = true;
    else
      this.topicHasError = false;
  }

  onSubmit() {
    //console.log(userForm);
    this.submitted = true;
    this.srv.enrollUser(this.userModel)
    .subscribe(
      data => console.log('Success', data),
      error => this.errorMsg = 'error! ' + error.statusText
    );
  }
}
