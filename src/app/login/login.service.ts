import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CookieService } from "ngx-cookie-service";


@Injectable()

export class LoginService {

  constructor(
    private router: Router,
    private cookies:CookieService,
  ) {}

  private token:string;

  login({email, password}:{email:string, password:string}) {

    firebase.auth().signInWithEmailAndPassword(email, password).then(

      response => {
        firebase.auth().currentUser?.getIdToken().then(
          userToken => {
            this.token = userToken;
            this.cookies.set('userToken', this.token)
            this.router.navigate(['/']);          }
        )
      }
    )
  }

  getIdToken(){
    // return this.token;
    return this.cookies.get('userToken')
  }

  estaLogueado(){
    return this.cookies.get('userToken')
  }

  logout(){
    firebase.auth().signOut().then(() => {
      this.token = '';
      this.cookies.set('userToken', this.token);
      this.router.navigate(['/']);
    })
  }
}
