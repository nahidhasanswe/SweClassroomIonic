import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  isLogin: any = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private menu: MenuController) {
    this.menu.enable(false,'sideMenuItems');
    if(this.isLogin){
      navCtrl.setRoot(HomePage);
    }
  }

  login(){
    this.navCtrl.setRoot(HomePage);
    this.menu.enable(true,'sideMenuItems');
  }

}
