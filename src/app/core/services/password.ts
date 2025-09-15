import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private readonly lowercase = 'abcdefghijklmnopqrstuvwxyz';
  private readonly uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private readonly numbers = '0123456789';
  private readonly symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
  private readonly allCharacters = this.lowercase + this.uppercase + this.numbers;

  generatePassword() {
    let password = '';
    const lengthArr = [8, 9, 10, 11, 12, 13, 14, 15];
    const charLength = this.allCharacters.length;
    const randomIdx = Math.floor(Math.random() * lengthArr.length);
    const randomLength = lengthArr[randomIdx];
    for (let i = 0; i < randomLength; i++) {
      const randomIndex = Math.floor(Math.random() * charLength);
      password += this.allCharacters[randomIndex];
    }
    return password;
  }
}
