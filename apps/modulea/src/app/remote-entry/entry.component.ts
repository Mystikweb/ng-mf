import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { PageBaseComponent, UserService } from '@ng-mf/shared';

@Component({
  selector: 'ng-mf-modulea-entry',
  template: `
    <h1>Module A Home</h1>
    <div>User is {{ (authenticated$ | async) ? 'authenticated': 'not authenticated' }}</div>
  `,
})
export class RemoteEntryComponent extends PageBaseComponent {
  private _userService = inject(UserService);

  override pageId = 'Module A Home'

  get authenticated$(): Observable<boolean> { return this._userService.isUserLoggedIn$; }
}
