import { ErrorHandler, Injectable, Provider } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GlobalExceptionHandlerService implements ErrorHandler {

  constructor(private readonly _snackBar: MatSnackBar) { }

  handleError(error: unknown): void {
    console.error(error);
    this._snackBar.open(`${error}`, undefined, {
      duration: -1
    }).afterDismissed().subscribe();
  }

}

export const ERROR_HANDLER_PROVIDER: Provider = {
  provide: ErrorHandler,
  useClass: GlobalExceptionHandlerService
};
