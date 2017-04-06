import { Component } from '@angular/core';
import { HomePage } from '../pages/home/home';


/*
  Generated class for the Categories component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'categories',
  templateUrl: 'categories.html'
})
export class CategoriesComponent {

  text: string;

  constructor() {
    console.log('Hello Categories Component');
    this.text = 'Hello World';
  }

  nextPage(){
    this.navCtrl.push(HomePage);
  }

}