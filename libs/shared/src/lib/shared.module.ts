import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './services/user.service';
import { MaterialModule } from './material.module';
import { ERROR_HANDLER_PROVIDER } from './services/global-exception-handler.service';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule],
  providers: [UserService, ERROR_HANDLER_PROVIDER]
})
export class SharedModule {}
