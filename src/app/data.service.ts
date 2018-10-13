import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError, of } from 'rxjs';
import { map, catchError, take, switchMap, throttle } from 'rxjs/operators';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  _userUrl = 'https://jsonplaceholder.typicode.com/users';
  _userUrlServer = 'http://localhost:3000/enroll';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Object[]> {
    return this.http.get<Object[]>(this._userUrl)
    .pipe(
      // map(data => {
      //   return data.map(user => ({id: user.id, name: user.name, phone: user.phone, email: user.email, website: user.website}));
      // }),
      catchError(error => {
        return this.errorHandler(error);
        //return throwError(error.message);
      })
    );
  }
  getUser(userId) {
    return this.http.get(this._userUrl + '/' + userId);
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  enrollUser(user: User) {
    return this.http.post<any>(this._userUrlServer, user)
    .pipe(catchError(error => {
      return this.errorHandler(error);
      //return throwError(error.message);
    }));
  }

  errorHandler(error: HttpErrorResponse) {
    // let errorMsg = '';
    // // console.log(error);
    // if (error.status == 404)
    //   errorMsg = this._userUrl + ' 404 not found';
    // else
    //   errorMsg = error.message || 'Server error';

    //   //console.log('Error: ', errorMsg);
    //   //console.log(error.statusText);
    // return observableThrowError(errorMsg);
    return throwError(error);
  }
}
