import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor() { }

  // patternValidator(): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } => {
  //     if (!control.value) {
  //       return null;
  //     }
  //     const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
  //     const valid = regex.test(control.value);
  //     return valid ? null : { invalidPassword: true };
  //   };
  // }

  // userNameValidator(userControl: AbstractControl) {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       if (this.validateUserName(userControl.value)) {
  //         resolve({ userNameNotAvailable: true });
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1000);
  //   });
  // }

  // validateUserName(userName: string) {
  //   const UserList = ['ankit', 'admin', 'user', 'superuser'];
  //   return (UserList.indexOf(userName) > -1);
  // }
}
