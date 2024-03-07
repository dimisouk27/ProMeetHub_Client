import { Time } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import * as moment from 'moment';

export class CustomValidators {
  static password(minLength: number = 6, maxLength?: number) {
    return (control: AbstractControl) => {
      const value: string = control.value;
      const regex =
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&=])[A-Za-z\\d@$!%*?&=]{' +
        minLength +
        ',' +
        (maxLength == undefined ? '' : maxLength) +
        '}$';
      if (!value) return null;

      if (value.match(regex)) return null;

      return { password: 'Votre mot de passe est requis' };
    };
  }
  static emailValidator() {
    return (control: AbstractControl) => {
      const value: string = control.value;
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!value) return null;

      if (value.trim().length == 0) return { email: 'votre email est requise' };

      if (value.length < 6)
        return {
          email:
            "Votre email n'est pas valide, elle ne peux pas contenir moins de 6 caractères",
        };

      let testMatch = value.match(regex);

      if (testMatch && testMatch[0] == value) return null;
      else return { email: "Votre email n'est pas valide" };
    };
  }

  static telValidator() {
    return (control: AbstractControl) => {
      const value: string = control.value;
      if (value) {
        if (value.trim().length == 0)
          return { phoneNumber: 'Votre numéro de téléphone est requis' };
        if (!value.match(/^[0-9]{10}$/))
          return {
            phoneNumber: 'Le numéro doit comproter au moins 10 chiffres',
          };
      }

      return null;
    };
  }

  // static dateValidator() {
  //   return (control: AbstractControl) => {
  //     const value: Date = control.value;
  //     const regex: string ="^(3[01]|[12][0-9]|0?[1-9])(\/|-)(1[0-2]|0?[1-9])\\2([0-9]{2})?[0-9]{2}$";

  //     if (value) {
  //       if (!value.toString().match(regex))
  //         return {
  //           date: 'La date est incorrect',
  //         };
  //     }

  //     return null;
  //   };
  // }

  static greaterThanValidator() {
    return (control: AbstractControl) => {
      const form = control.value;

      if (!form) return null;

      const startDate: Date = form.startDate;
      const endDate: Date = form.endDate;
      const startHours : number = form.startTime instanceof Date ? form.startTime.getHours(): 0;//Car type any, il ne reconnait pas la fonction
      const startMinutes : number = form.startTime instanceof Date ? form.startTime.getMinutes( ) : 0;
      const endHours : number = form.endTime instanceof Date ? form.endTime.getHours(): 0;
      const endMinutes : number = form.endTime instanceof Date ? form.endTime.getMinutes(): 0;
      
      const startTime: Date = new Date(2024,2,20,startHours, startMinutes);
      const endTime: Date = new Date(2024,2,20,endHours, endMinutes);

      if (startDate > endDate) {
        return {
          endDate: 'La date de fin doit être supérieur à la date  de début',
        };
      }

      if (startTime > endTime) {
        return {
          endTime: "L'heure de fin doit être supérieure à l'heure de début",
        };
      }

      return null;
    };
  }
}
