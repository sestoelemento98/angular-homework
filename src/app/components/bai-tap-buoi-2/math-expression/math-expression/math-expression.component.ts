import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math-expression',
  templateUrl: './math-expression.component.html',
  styleUrls: ['./math-expression.component.css']
})
export class MathExpressionComponent implements OnInit {
  input: number = 0;
  resultOfExpress: any = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  solution() {
    
    if (this.input > 0) {
      let announceString: string = 'Value of express 1/n + 2/n + ... + n/n is'
      for (let i = 1; i <= this.input; i++) {
          this.resultOfExpress += i/this.input;
      }
  
      return announceString + this.resultOfExpress
    } else {
      this.resultOfExpress = 'Number must greater than 0'
        return this.resultOfExpress;
    }
  }

  setInput(input: number) {
    this.input = input;
  }
}
