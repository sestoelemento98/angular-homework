import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Color } from 'src/app/models/color-list';
import { ColoredObject } from 'src/app/models/colored-object';

@Component({
  selector: 'app-colored-object-child',
  templateUrl: './colored-object-child.component.html',
  styleUrls: ['./colored-object-child.component.css']
})
export class ColoredObjectChildComponent implements OnInit, AfterViewChecked{
  @Input() objectArray: ColoredObject[] = [];

 
  constructor() { }

  ngOnInit(): void {    

    
    
  }
  ngAfterViewChecked(): void {
    console.log(this.objectArray);
    
  }
  


  getBorderColor(colorId: number) {
    switch (colorId) {
      case 0:
        return 'blue';
      case 1: 
        return 'red';
      case 2:
        return 'purple';
      case 3:
        return 'yellow';
      default:
        return 'Nothing';
    }
  }

  getColorName(colorId: number) {
    switch (colorId) {
      case 0:
        return 'Blue';
      case 1: 
        return 'Red';
      case 2:
        return 'Purple';
      case 3:
        return 'Yellow';
      default:
        return 'Nothing';
    }
  }

  appendArray(colorObject: ColoredObject) {
    let newColorObject = new ColoredObject(0, 'Object', Color.Blue)
    Object.assign(newColorObject, colorObject);
    this.objectArray.push(newColorObject);
    console.log(this.objectArray);
    
  }
}
