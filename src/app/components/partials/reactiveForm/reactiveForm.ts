import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import {DataGridComponent} from '../data-grid/data-grid';


@Component({
  selector: 'reactive-form',
  templateUrl: './reactiveForm.html'
})
export class reactiveFormComponent implements OnInit {
  myForm: FormGroup;
  formObject= [];
  constructor() {
     this.formObject = (localStorage.getItem('data') == null) ? [] : JSON.parse( localStorage.getItem('data'));
  }

  ngOnInit() {
  this.myForm = new FormGroup({
      name: new FormControl('Benedict', Validators.required),
      email: new FormControl('abc@gmail.com', Validators.required),
      message: new FormControl('you name is'),
      address: new FormGroup({
      city: new FormControl('jammu'),
      pin: new FormControl('112456')
      })
    });

   }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
    this.formObject.push(form.value);
    localStorage.setItem('data', JSON.stringify(this.formObject));
   // this.myForm.reset();
    }
  handleUserUpdated(user) {
   this.myForm = new FormGroup({
      name: new FormControl(user.name, Validators.required),
      email: new FormControl(user.email, Validators.required),
      message: new FormControl(user.message),
      address: new FormGroup({
      city: new FormControl(user.address.city),
      pin: new FormControl(user.address.pin)
      })
      });
  }
}
