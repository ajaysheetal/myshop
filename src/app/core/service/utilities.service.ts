import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  snackbarRef: MatSnackBarRef<SimpleSnackBar> | undefined;

  constructor(private snackbar: MatSnackBar) {}
  errorHandlerMessgae(message: string) {
    this.snackbarRef = this.snackbar.open(message, '', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['red-snackbar'],
    });
  }

  successToastMessage(msg: string) {
    this.snackbarRef = this.snackbar.open(msg, '', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['green-snackbar'],
    });
  }
}
