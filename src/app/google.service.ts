import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  private auth2:gapi.auth2.GoogleAuth
  private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1)

  constructor() { 

  gapi.load("auth2", ()=>{
    gapi.auth2.init({
      client_id: '1065566128187-jqd0pmnd09v6s29pjej6sh7f31dstck9.apps.googleusercontent.com'
    })
  })
}

public signin(){
  this.auth2.signIn({
    //
    scope: "https://www.googleapis.com/auth/gmail.readonly"
  }).then(user => {
     this.subject.next(user)
  }).catch(()=>{
    this.subject.next(null)
  })
}

public signOut(){
  this.auth2.signOut()
  .then(()=>{
    this.subject.next(null)
  })
}

public observable() : Observable<gapi.auth2.GoogleUser>{
  return this.subject.asObservable()
}
}
