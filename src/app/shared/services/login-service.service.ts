import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { GlobalVariable } from 'src/app/authorization/global/variable';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }
  LOGIN_API: string = 'api/user-login';

  login(data: any): Observable<any> {
    return this.http.post(GlobalVariable.BASE_API_URL + this.LOGIN_API, data).pipe(take(1));
  }

  isLoggedIn() {
    return localStorage.getItem('userToken') != null;
  }
}
