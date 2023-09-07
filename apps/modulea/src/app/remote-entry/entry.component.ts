import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { PageBaseComponent, UserService } from '@ng-mf/shared';

@Component({
  selector: 'ng-mf-modulea-entry',
  template: `
    <h1>Module A Home</h1>
    <div>User is {{ (authenticated$ | async) ? 'authenticated': 'not authenticated' }}</div>
  `,
})
export class RemoteEntryComponent extends PageBaseComponent implements OnInit {

  get authenticated$(): Observable<boolean> { return this._userService.isUserLoggedIn$; }

  constructor(private _userService: UserService) {
    super();
  }

  ngOnInit(): void {
    this._pageId = 'Module A Home';
  }
}
