import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert-dash',
  templateUrl: './insert-dash.component.html',
  styleUrls: ['./insert-dash.component.css']
})
export class InsertDashComponent implements OnInit {
 
  input: string = '';
  output: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  insertDash(){
    for (var i = 0; i < this.input.length; i++) {
      if (Number(this.input[i]) % 2 == 0 && Number(this.input[i + 1]) % 2 == 0) {
        this.output += Number(this.input[i]) + " - ";
      } else {
        this.output += Number(this.input[i]);
      }
    }
  }
  

}
