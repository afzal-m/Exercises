import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ColoursPage} from "../colours/colours";
import {ColourBluePage} from "../colour-blue/colour-blue";
import {ColourGreenPage} from "../colour-green/colour-green";

/**
 * Generated class for the ButtonsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-buttons',
  templateUrl: 'buttons.html',
})
export class ButtonsPage {
  word;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ButtonsPage');
  }

  CallWord(word:string){
    this.word = word;
  }

  PageRed(){
    console.log("PageRed");
    this.navCtrl.push(ColoursPage);
  }

  PageBlue(){
    console.log("PageBlue");
    this.navCtrl.push(ColourBluePage);
  }

  PageGreen(){
    console.log("PageGreen");
    this.navCtrl.push(ColourGreenPage);
  }

}
