import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Subject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  errorMessage = new Subject<string>();
  errorStatus = new Subject<number>();

  constructor(private http: HttpClient) { }

  getErrorStatus(): Observable<number> {
    return this.errorStatus.asObservable();
  }

  getErrorMessage(): Observable<string> {
    return this.errorMessage.asObservable();
  }

  handleError(error: HttpErrorResponse) {
    this.errorMessage.next(error.error);
    this.errorStatus.next(error.status);  
    return throwError(
      'Unable to proceed now; please try again later');
  };

  register(entry: object) {
    return this.http.post<object>('http://localhost:4200/placeholder', entry)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  // potentially different functions
  login(entry: object) { 
    return this.http.post<object>('http://localhost:4200/placeholder', entry)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

}
