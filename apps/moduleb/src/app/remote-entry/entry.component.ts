import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PageBaseComponent, selectLoggedIn } from '@ng-mf/shared';

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
  readonly authenticated$: Observable<boolean>;

  constructor(private readonly _store: Store) {
    super();
    this.authenticated$ = this._store.select(selectLoggedIn);
  }

  ngOnInit(): void {
    this._pageId = 'Module B Home';
  }
}
