import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { PageBaseComponent, UserService } from '@ng-mf/shared';

@Component({
  selector: 'mdb-moduleb-entry',
  template: `
    <h1>Module B Home</h1>
    <div>User is {{ (authenticated$ | async) ? 'authenticated': 'not authenticated' }}</div>
  `,
})
export class RemoteEntryComponent extends PageBaseComponent {
  private _userService = inject(UserService);

  override pageId = 'Module B Home'

  get authenticated$(): Observable<boolean> { return this._userService.isUserLoggedIn$; }
}
