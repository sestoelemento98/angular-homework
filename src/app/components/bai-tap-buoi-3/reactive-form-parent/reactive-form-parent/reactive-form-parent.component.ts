import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-parent',
  templateUrl: './reactive-form-parent.component.html',
  styleUrls: ['./reactive-form-parent.component.css']
})
export class ReactiveFormParentComponent implements OnInit {

  customReactiveForm: FormGroup = new FormGroup({
    id: new FormControl('',[Validators.required, Validators.maxLength(5)]),
    name: new FormControl('',[Validators.required]),
    color: new FormControl([Validators.required])
  })
  constructor() { }

  ngOnInit(): void {
  }

  submit() {

  }
}
