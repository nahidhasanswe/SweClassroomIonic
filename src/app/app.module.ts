import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Http,HttpModule,RequestOptions, XHRBackend} from '@angular/http';

import { ServerBasePath } from '../providers/auth-providers/serverBasePath';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RoomAllocationPage } from '../pages/room-allocation/room-allocation';
import { AuthProvider } from '../providers/auth-providers/auth';
import { HttpService } from '../providers/auth-providers/httpService';

export function httpFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
  return new HttpService(backend, defaultOptions);
  }

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RoomAllocationPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RoomAllocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: HttpService,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    },
    AuthProvider,
    ServerBasePath
  ]
})
export class AppModule {}
