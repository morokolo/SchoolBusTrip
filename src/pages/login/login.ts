import { Component , trigger, state, style, transition, animate, keyframes} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ChildGroupPage} from "../child-group/child-group";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',

})
export class LoginPage {

  public loginForm: any;
  public backgroundImage = 'assets/img/background/background-5.jpg';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.navCtrl.push(ChildGroupPage);
  }

}
