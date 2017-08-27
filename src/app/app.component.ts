import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CalculatorUiPage } from '../pages/calculator-ui/calculator-ui';
import {ButtonsPage} from "../pages/buttons/buttons";
import { ColoursPage } from "../pages/colours/colours";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ButtonsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

