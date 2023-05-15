import { Component, inject } from '@angular/core';

import { UserService } from '@ng-mf/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'ng-mf-modulea-entry',
  template: `
    <h1>Module A Home</h1>
    <div>User is {{ (authenticated$ | async) ? 'authenticated': 'not authenticated' }}</div>
  `,
})
export class RemoteEntryComponent {
  private _userService = inject(UserService);

  get authenticated$(): Observable<boolean> { return this._userService.isUserLoggedIn$; }
}
