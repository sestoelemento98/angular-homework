import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student-info';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

    
    rawInput1: string = "SV001, Nguyễn Văn A; SV003, Phạm Văn C; SV006, Nguyễn Văn D";
    rawInput2: string = "SV001, Hà Nội; SV009, Đà nẵng; SV003, Thái Bình; SV005, Cần Thơ";

    handledInput1: string[] = this.rawInput1.split('; ');
    handledInput2: string[] = this.rawInput2.split('; ');

    result: string = '';
    result2: string = '';
    studentIdArray: string[] = [];
    studentArray1: Student[] = [];
    studentArray2: Student[] = [];
    
  constructor() { }

  ngOnInit(): void {
    this.solve();
  }

  solve() {
      this.handledInput1.forEach(element1 => {
          let studentId1 = element1.slice(0, 5);
          let infoStudent1 = element1.slice(6);
          
          this.handledInput2.forEach(element2 => {
              let studentId2 = element2.slice(0, 5);
              let infoStudent2 = element2.slice(6);

              if (studentId1 == studentId2) {
                  this.result = studentId1 + infoStudent1 + infoStudent2;
                  this.studentArray1.push(new Student(infoStudent1, studentId1, infoStudent2));
              }
          })   
      })



      this.handledInput1.forEach(element1 => {
          let studentId1 = element1.slice(0, 5);
          this.studentIdArray.push(studentId1)
      })


      this.handledInput2.forEach(element2 => {
          let studentId2 = element2.slice(0, 5);
          let infoStudent2 = element2.slice(6);   
          this.result2 = studentId2 + infoStudent2;     
          if (this.studentIdArray.indexOf(studentId2) == -1) {
              this.studentArray2.push (new Student('', studentId2, infoStudent2));
          }     
      })
  }
}
