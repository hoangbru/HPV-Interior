import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static nameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const name = control.value;
      const forbiddenNames = ['abc', 'def', 'xyz']; // Tên Size không được trùng với các giá trị này

      if (forbiddenNames.includes(name)) {
        return { forbiddenName: true };
      }
      return null;
    };
  }
}
