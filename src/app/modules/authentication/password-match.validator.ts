import {FormControl, ValidationErrors} from '@angular/forms';

export class PasswordMatchValidator {

  static passwordMatchValidator(control: FormControl): ValidationErrors | null {
    const password = control.get('password').value;
    const repeatedPassword = control.get('reenteredPassword').value;
    if (password !== repeatedPassword) {
      return {NoPasswordMatch: true};
    }
  }

}
