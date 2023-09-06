import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _isUserLoggedIn = new BehaviorSubject<boolean>(false);
  readonly isUserLoggedIn$ = this._isUserLoggedIn.asObservable();

  getLoggedIn(): boolean {
    return this._isUserLoggedIn.value;
  }

  checkCredentials(username: string, password: string): void {
    if (username === 'demo' && password === 'demo') {
      this._isUserLoggedIn.next(true);
    }
  }

  logout(): void {
    this._isUserLoggedIn.next(false);
  }
}
