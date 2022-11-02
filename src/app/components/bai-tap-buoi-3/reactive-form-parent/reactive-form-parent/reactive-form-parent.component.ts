import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ColoredObjectsComponent } from 'src/app/components/bai-tap-buoi-2/colored-object/colored-objects.component';
import { ColoredObject } from 'src/app/models/colored-object';
@Component({
  selector: 'app-reactive-form-parent',
  templateUrl: './reactive-form-parent.component.html',
  styleUrls: ['./reactive-form-parent.component.css']
})
export class ReactiveFormParentComponent implements OnInit {

  @ViewChild(ColoredObjectsComponent) coloredObjectsComponent !: ColoredObjectsComponent;
  customReactiveForm: FormGroup = new FormGroup({
    id: new FormControl('',[Validators.required, this.checkId]),
    name: new FormControl('',[Validators.required, this.checkName]),
    color: new FormControl([Validators.required, this.checkColor])
  })
 
  parentColoredObject: ColoredObject = {
    color: 0,
    isDisabled: true
  };
  constructor() { 
    
  }

  ngOnInit(): void {
  }


  submit() {
    this.parentColoredObject.id = Number(this.customReactiveForm.get('id')?.value);
    this.parentColoredObject.name = this.customReactiveForm.get('name')?.value;
    this.parentColoredObject.color = Number(this.customReactiveForm.get('color')?.value);
    if (this.customReactiveForm.valid) {
      this.coloredObjectsComponent.objectArray.push(this.parentColoredObject);
    }
  }

  checkId (control: AbstractControl): ValidationErrors | null {
    const check = control.value;

    if (check == null || check == '') {
      return {error: 'ID field must not empty'};
    }

    if (!/^[0-9]+$/.test(check)) {
      return {error: 'Input must be number type!'};
    }

    if (!/^[0-9]{1,5}$/.test(check)){
      return {error: 'Maximum is 5 characters'};
      
    }

    return null;
  }

  checkName (control: AbstractControl): ValidationErrors | null {
    const check = control.value;

    if (check == null || check == '') {
      return {error: 'ID field must not empty'};
    }

    if (!/^[a-zA-Z]+$/.test(check)) {
      return {error: 'Input must be letters type!'}
    }
    return null;
  }

  checkColor (control: AbstractControl): ValidationErrors | null {
    const check = control.value;

    if (check == null || check == '') {
      return {error: 'Please select one!'}
    }
    return null;
  }
}
