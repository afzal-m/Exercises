import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CalculatorUiPage } from '../pages/calculator-ui/calculator-ui';
import { ButtonsPage} from "../pages/buttons/buttons";
import {ColoursPage} from "../pages/colours/colours";
import {ColourBluePage} from "../pages/colour-blue/colour-blue";
import {ColourGreenPage} from "../pages/colour-green/colour-green";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CalculatorUiPage,
    ButtonsPage,
    ColoursPage,
    ColourBluePage,
    ColourGreenPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CalculatorUiPage,
    ButtonsPage,
    ColoursPage,
    ColourBluePage,
    ColourGreenPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
