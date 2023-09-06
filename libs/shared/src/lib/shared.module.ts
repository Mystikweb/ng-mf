import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './services/user.service';
import { MaterialModule } from './material.module';
import { ERROR_HANDLER_PROVIDER } from './services/global-exception-handler.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, ReactiveFormsModule],
  exports: [FormsModule, MaterialModule, ReactiveFormsModule],
  providers: [UserService, ERROR_HANDLER_PROVIDER],
})
export class SharedModule {}
