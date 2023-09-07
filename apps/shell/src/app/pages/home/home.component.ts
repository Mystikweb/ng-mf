import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { PageBaseComponent, UserService } from '@ng-mf/shared';

@Component({
  selector: 'ng-mf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends PageBaseComponent {

  get authenticated$(): Observable<boolean> { return this._userService.isUserLoggedIn$; }

  constructor(private readonly _userService: UserService) {
    super();
  }

}
