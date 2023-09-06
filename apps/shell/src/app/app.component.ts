import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '@ng-mf/shared';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'ng-mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private _breakpointObserver = inject(BreakpointObserver);
  private _userService = inject(UserService);

  get showLogin(): boolean { return this._showLogin; }
  private _showLogin = true;

  isHandset$ = this._breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  ngOnInit(): void {
    const loggedIn = this._userService.getLoggedIn();
    this._showLogin = loggedIn === false;

    this._userService.isUserLoggedIn$.subscribe(value => this._showLogin = value === false);
  }
}
