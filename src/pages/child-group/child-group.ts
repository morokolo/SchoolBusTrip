import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ChildGroupDetailPage} from "../child-group-detail/child-group-detail";

/**
 * Generated class for the ChildGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-child-group',
  templateUrl: 'child-group.html',
})
export class ChildGroupPage {

  groups = [
    {
      name: "Pre-Schoolars",
      date: 'November 5, 2016',
      members: 12,
      comments: 4,
      am_pick_up_time: "06:00 am",
      timestamp: '11h ago'
    },
    {
      name: "Midrand Group",
      date: 'October 23, 2016',
      members: 30,
      comments: 64,
      am_pick_up_time: "07:00 am",
      timestamp: '30d ago'
    },
    {
      name: "Kempton Park Group",
      date: 'June 28, 2016',
      members: 46,
      comments: 66,
      am_pick_up_time: "08:00 am",
      timestamp: '4mo ago'
    },
  ];

  user = {
    name: 'Cosima Niehaus',
    twitter: '@CheekyEvoDevo',
    profileImage: '../assets/img/avatar/cosima-avatar.jpg',
    followers: 456,
    following: 1052,
    tweets: 35,
    dayOfWeek: "Wednesday",
    dateOfWeek: "12 February 2018"
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildGroupPage');
  }

  goToGroupDetails() {
    this.navCtrl.push(ChildGroupDetailPage)
  }

}
