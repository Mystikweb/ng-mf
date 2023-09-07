import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map, shareReplay } from 'rxjs';

import { UserService } from '@ng-mf/shared';

@Component({
  selector: 'ng-mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  get showLogin(): boolean {
    return this._showLogin;
  }
  private _showLogin = true;

  isHandset$ = this._breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  );

  constructor(
    private readonly _breakpointObserver: BreakpointObserver,
    private readonly _userService: UserService
  ) {}

  ngOnInit(): void {
    const loggedIn = this._userService.getLoggedIn();
    this._showLogin = loggedIn === false;

    this._userService.isUserLoggedIn$.subscribe(
      (value) => (this._showLogin = value === false)
    );
  }
}
