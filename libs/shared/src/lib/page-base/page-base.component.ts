/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Component, OnInit } from '@angular/core';

import { PageComponent } from '../application.model';

@Component({
  template: '',
  host: {
    'class': 'page-container',
    '[class.as-flex]': 'displayFlex',
    '[class.align-center]': 'alignCenter',
    '[attr.id]': 'pageId'
  }
})
export abstract class PageBaseComponent implements PageComponent, OnInit {
  pageId!: string;
  isStartup = false;
  displayFlex = true;
  alignCenter = false;

  ngOnInit(): void {
      if (this.pageId === undefined || this.pageId.length === 0) {
          throw new Error('Component must set the [pageId] value');
      }
  }
}
