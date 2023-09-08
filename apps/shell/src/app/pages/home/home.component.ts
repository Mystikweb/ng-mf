import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PageBaseComponent, selectLoggedIn } from '@ng-mf/shared';

@Component({
  selector: 'ng-mf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends PageBaseComponent {

  readonly authenticated$: Observable<boolean>

  constructor(private readonly _store: Store) {
    super();

    this._pageId = 'Home';
    this.authenticated$ = this._store.select(selectLoggedIn);
  }

}
