import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TrendingPage } from '../trending/trending';
import { ProfilePage } from '../profile/profile';


/*
  Generated class for the Category page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.navCtrl.setRoot(CategoryPage);
  }

  nextPage(){
    this.navCtrl.push(CategoryPage);
  }
  trendingPage(){
    this.navCtrl.push(TrendingPage);
  }
  profilePage(){
    this.navCtrl.push(ProfilePage);
  }
  homePage(){
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

}
