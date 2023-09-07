import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PageBaseComponent, UserService } from '@ng-mf/shared';

@Component({
  selector: 'mdb-moduleb-entry',
  template: `
    <h1>Module B Home</h1>
    <div>
      User is
      {{ (authenticated$ | async) ? 'authenticated' : 'not authenticated' }}
    </div>
  `,
})
export class RemoteEntryComponent extends PageBaseComponent implements OnInit {
  get authenticated$(): Observable<boolean> {
    return this._userService.isUserLoggedIn$;
  }

  constructor(private readonly _userService: UserService) {
    super();
  }

  ngOnInit(): void {
    this._pageId = 'Module B Home';
  }
}
