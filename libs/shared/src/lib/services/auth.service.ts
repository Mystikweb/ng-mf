import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { User, UserCredentials } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login({ username, password }: UserCredentials): Observable<User> {
    const authenticated = username === 'demo' && password === 'demo';

    const user: User = {
      id: username,
      authenticated: authenticated,
    };

    if (!authenticated)
      return throwError(() => 'Invalid username and password.');

    return of(user);
  }

  logout(): Observable<boolean> {
    return of(true);
  }
}
