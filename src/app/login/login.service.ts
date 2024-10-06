import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


@Injectable()

export class LoginService {

  constructor(private router: Router) {}

  private token:string;

  login({email, password}:{email:string, password:string}) {

    firebase.auth().signInWithEmailAndPassword(email, password).then(

      response => {
        firebase.auth().currentUser?.getIdToken().then(
          userToken => {
            this.token = userToken;
            this.router.navigate(['/']);          }
        )
      }
    )
  }

  getIdToken(){
    return this.token;
  }

  estaLogueado(){
    return this.token;
  }

  logout(){
    firebase.auth().signOut().then(() => {
      this.token = '';
      this.router.navigate(['/']);
    })
  }
}
