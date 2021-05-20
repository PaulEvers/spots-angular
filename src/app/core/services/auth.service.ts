import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  login(email: string, password: string) {
    return this.afAuth
    .signInWithEmailAndPassword(email, password)
    .then(async (result) => {
      const token = await result.user.getIdToken();
      console.log(token);
      
      return true;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
  }
}
