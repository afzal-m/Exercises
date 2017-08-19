import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage} from "../home/home";

/**
 * Generated class for the CalculatorUiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-calculator-ui',
  templateUrl: 'calculator-ui.html',
})
export class CalculatorUiPage {
  total = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorUiPage');
  }

  NewPage(){
    console.log("NewPage");
    this.navCtrl.push(HomePage);
  }

  CallNumber(num:number){
    this.total = num;
  }

}
