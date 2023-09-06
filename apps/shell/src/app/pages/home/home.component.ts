import { Component, inject } from '@angular/core';

import { PageBaseComponent, UserService } from '@ng-mf/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'ng-mf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends PageBaseComponent {
  private readonly _userService = inject(UserService);

  get authenticated$(): Observable<boolean> { return this._userService.isUserLoggedIn$; }

}
