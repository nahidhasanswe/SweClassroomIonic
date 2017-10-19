import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as sql from 'alasql';

/**
 * Generated class for the RoomAllocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room-allocation',
  templateUrl: 'room-allocation.html',
})
export class RoomAllocationPage {

  data: any[] = [{id: 1},{id: 1},{id: 1},{id: 1},{id: 1}];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var result = sql("select id from ?", [this.data]);
    console.log(result)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomAllocationPage');
  }

}
