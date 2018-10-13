import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  regForm = new FormGroup({
    userName: new FormControl('Pini Rotblat'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address : new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });

  rForm: FormGroup;
  post: any;
  description: string = '';
  name: string = '';
  titleAlert: string = 'This field is required';

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(500)])],
      'validate': ''
    });
   }

  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('name').setValidators(Validators.required);
          this.titleAlert = 'This field is required';
        }
        this.rForm.get('name').updateValueAndValidity();
      }
    );
  }

  addPost(post) {
    this.name = post.name;
    this.description = post.description;
  }

}
