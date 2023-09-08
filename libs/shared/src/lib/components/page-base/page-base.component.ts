/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Component } from '@angular/core';

import { PageComponent } from '../../models';

@Component({
  template: '',
  host: {
    'class': 'page-container',
    '[class.as-flex]': 'displayFlex',
    '[class.align-center]': 'alignCenter',
    '[attr.id]': 'pageId'
  }
})
export abstract class PageBaseComponent implements PageComponent {

  get pageId(): string { return this._pageId; }
  protected _pageId = '';

  get isStartup(): boolean { return this._isStartup; }
  protected _isStartup = false;

  get displayFlex(): boolean { return this._displayFlex; }
  protected _displayFlex = true;

  get alignCenter(): boolean { return this._alignCenter; }
  protected _alignCenter = false;

}
