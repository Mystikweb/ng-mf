import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, shareReplay } from 'rxjs';

import { AuthActions, selectLoggedIn } from '@ng-mf/shared';

@Component({
  selector: 'ng-mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly authenticated$: Observable<boolean>;

  isHandset$ = this._breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  );

  constructor(
    private readonly _breakpointObserver: BreakpointObserver,
    private readonly _store: Store
  ) {
    this.authenticated$ = this._store.select(selectLoggedIn);
  }

  logout(): void {
    this._store.dispatch(AuthActions.logout());
  }
}
