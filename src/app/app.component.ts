import { Component, ViewChild } from '@angular/core';
import { Nav,Platform, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RoomAllocationPage } from '../pages/room-allocation/room-allocation';

import { AuthProvider } from '../providers/auth-providers/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any;
  userName: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private menu: MenuController, private auth: AuthProvider) 
  {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    if (this.auth.isAuthenticate()){
      this.userName = this.auth.getUserName();
      this.rootPage = HomePage;
    }else {
      this.rootPage = LoginPage;
    }

  }

  logout() {
    this.menu.enable(false, 'sideMenuItems');
    this.auth.logout();
    this.nav.setRoot(LoginPage);
  }

  roomAllocation () {
    this.nav.push(RoomAllocationPage);
  }
}

