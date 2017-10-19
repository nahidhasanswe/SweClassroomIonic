import { Injectable } from '@angular/core';
import {Headers,Http} from '@angular/http';
import {ServerBasePath} from './serverBasePath';


@Injectable()
export class AuthProvider {

  private serverPath = ServerBasePath.serverPath;
  
    constructor(private http : Http) { }
  
    login(data: any) {
      let body = 'username=' + data.username + '&password=' + data.password + '&grant_type=password';
      return this.http.post(this.serverPath + '/token',body,{headers:this.contentHeaders()}).map((res)=>{
        var data=res.json();
        window.localStorage.setItem('accessToken', data.access_token);
        window.localStorage.setItem('expired', ((data.expires_in * 1000) + new Date().getTime()).toString());
        window.localStorage.setItem('userName', data.userName);
        return true;
      });
    }
  
    logout() {
      window.localStorage.removeItem('accessToken');
      window.localStorage.removeItem('expired');
      window.localStorage.removeItem('userName');
      return true;
    }
  
    registration(data: any , http: Http){
      return http.post(this.serverPath +'/api/account/registration',data);
    }
  
    contentHeaders() {
      let header = new Headers();
      header.append('Content-Type', 'application/x-www-form-urlencoded');
      return header;
    }
  
    isAuthenticate(){
      const time = window.localStorage.getItem('expired');
      return !!window.localStorage.getItem('accessToken') || Date.now() < Number(time);
    }

    getUserName() {
      return window.localStorage.getItem('userName');
    }

   

}
