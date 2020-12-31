import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_model/user';
import { map } from 'rxjs/operators'
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
private userSubject: BehaviorSubject<User>;
public user: Observable<User>

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject= new BehaviorSubject<User>(JSON.parse(localStorage.getItem('use')));
    this.user= this.userSubject.asObservable();
  }

  public get userValue(): User{
    return this.userSubject.value;
  }

  login(username, password){
    return this.http.post<User>(`${environment.apiUrl}/login`, { username, password})
    .pipe(map(user => {
      localStorage.setItem('user', JSON.stringify(user));
      this.userSubject.next(user);
    }))
  }
logout(){
  localStorage.removeItem('user');
  this.userSubject.next(null);
  this.router.navigate(['/login']);
}

getToken(){
  const localToken= localStorage.getItem('user');
  if(localToken){
    const user = JSON.parse(localToken);
    return user.token;
  }
  return null;
}

decodeToken(){

  const helper = new JwtHelperService();
  const token= this.userValue.token;
  const decodedToken = helper.decodeToken(token);
  const expirationDate = helper.getTokenExpirationDate(token);
  const isExpired = helper.isTokenExpired(token);
   console.log(decodedToken);

  if(decodedToken.roles[0]=="ROLE_ADMIN"){

    this.router.navigate(['/admin'])

  }
//   else (decodedToken.roles=="ROLE_Apprenant"){

//         this.router.navigate(['/apprenant']);
//   }
}
}
