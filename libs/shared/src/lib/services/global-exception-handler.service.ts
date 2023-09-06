import { ErrorHandler, Injectable, Provider, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GlobalExceptionHandlerService implements ErrorHandler {
  private readonly _snackBar = inject(MatSnackBar);


  handleError(error: unknown): void {
    this._snackBar.open(`${error}`).afterDismissed().subscribe();
  }

}

export const ERROR_HANDLER_PROVIDER: Provider = {
  provide: ErrorHandler,
  useClass: GlobalExceptionHandlerService
};
