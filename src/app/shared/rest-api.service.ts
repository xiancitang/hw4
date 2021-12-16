import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

   // Define API
   apiURL = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    } 

      // HttpClient API get() method => Fetch students list
  getStudents(): Observable<Student> {
    return this.http.get<Student>(this.apiURL + '/students')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

    // HttpClient API get() method => Fetch student
    getStudentbyId(studentid:any): Observable<Student> {
      return this.http.get<Student>(this.apiURL + '/students/' + studentid)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

      // HttpClient API post() method => Create student
  createStudent(student:any): Observable<Student> {
    return this.http.post<Student>(this.apiURL + '/student', JSON.stringify(student), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  } 

    // Error handling 
    handleError(error:any) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
   }

    
}
