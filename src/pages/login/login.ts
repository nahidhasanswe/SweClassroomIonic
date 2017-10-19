import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { HomePage } from '../home/home';
import { LoadingController, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth-providers/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  isLogin: any = false;
  public formdata;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,
              private menu: MenuController, private auth: AuthProvider, private loading: LoadingController) 
  {
    this.menu.enable(false,'sideMenuItems');
    this.initialForm();
    if(this.isLogin){
      navCtrl.setRoot(HomePage);
    }
  }

  initialForm() {
    this.formdata = new FormGroup({
      username: new FormControl("",Validators.required),
      password: new FormControl("",Validators.required)
    });
  }

  ionViewDidLoad() {
    
  }

  login(data, valid ){
    let loader = this.loading.create({
      content : 'Loginig....'
    });

    if(valid) {
      loader.present();
      this.auth.login(data).subscribe(result => {
        loader.dismiss();
        this.navCtrl.setRoot(HomePage);
        this.menu.enable(true,'sideMenuItems');
      }, error => {
        loader.dismiss();
        let toaster = this.toast.create({
          message : error.json().error_description,
          duration : 3000
        })
        toaster.present();
      })
    }else {

    }
  }

}
