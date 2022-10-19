import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hook-demo',
  templateUrl: './hook-demo.component.html',
  styleUrls: ['./hook-demo.component.css']
})
export class HookDemoComponent implements  OnInit, OnChanges,DoCheck, AfterContentInit, 
                                          AfterContentChecked, AfterViewInit, AfterContentChecked, OnDestroy{
  

  value: string = '';
  constructor() { }

  ngOnInit(): void {
    this.logInformation('OnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    this.logInformation('OnChanges');
  }

  ngDoCheck(): void {
    this.logInformation('DoCheck');
  }

  ngAfterContentInit(): void {
    this.logInformation('AfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.logInformation('AfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.logInformation('AfterViewInit');
  }

  ngOnDestroy(): void {
    this.logInformation('OnDestroy');
  }

  logInformation(str: string): void {
    this.value = 'This is ' + str + ' hook!'
  }

}
