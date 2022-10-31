import { Component, Input, OnInit} from '@angular/core';
import { ColoredObject } from 'src/app/models/colored-object';
import { Color } from 'src/app/models/color-list';
import { ChildActivationEnd } from '@angular/router';
import { ColoredObjectChildComponent } from '../../bai-tap-buoi-3/colored-object-child/colored-object-child.component';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-colored-objects',
  templateUrl: './colored-objects.component.html',
  styleUrls: ['./colored-objects.component.css']
})
export class ColoredObjectsComponent implements OnInit {
 
  @Input() parentColor!: ColoredObject;
  objectId: number = 0;
  object1: ColoredObject = new ColoredObject(++this.objectId,'Object 1', Color.Blue);
  object2: ColoredObject = new ColoredObject(++this.objectId,'Object 2', Color.Red);
  object3: ColoredObject = new ColoredObject(++this.objectId,'Object 3', Color.Purple);
  object4: ColoredObject = new ColoredObject(++this.objectId,'Object 4', Color.Yellow);
  object5: ColoredObject = new ColoredObject(++this.objectId,'Object 5', Color.Blue);
  object6: ColoredObject = new ColoredObject(++this.objectId,'Object 6', Color.Red);
  object7: ColoredObject = new ColoredObject(++this.objectId,'Object 7', Color.Purple);
  object8: ColoredObject = new ColoredObject(++this.objectId,'Object 8', Color.Yellow);
  object9: ColoredObject = new ColoredObject(++this.objectId,'Object 9', Color.Blue);
  object10: ColoredObject = new ColoredObject(++this.objectId,'Object 10', Color.Red);

  objectArray: ColoredObject[] = [this.object1, this.object2, this.object3, this.object4, 
                                  this.object5, this.object6, this.object7,this.object8, 
                                  this.object9, this.object10];
  blueColor = {
    color: 'blue'
  }
  redColor = {
    color: 'red'
  }
  purpleColor = {
    color: 'purple'
  }
  yellowColor = {
    color: 'yellow'
  }
  
 

  
  
  constructor() { }

  ngOnInit(): void {
  }

  deleteRow(object: ColoredObject)
  {
    const index = this.objectArray.indexOf(object);
    this.objectArray.splice(index, 1);
  }

}
