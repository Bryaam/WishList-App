import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PendingsPage } from '../pages/pendings/pendings.component';
import { DonePage } from '../pages/done/done.component';
import { TabsPage } from '../pages/tabs/tabs';
import { AddPage } from '../pages/add/add.component';
import { ListsComponent } from '../components/lists/lists';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Services
import { WishesListService } from "../services/wishes.service";
// Pipes
import { DoneFilterPipe } from '../pipes/done-filter/done-filter';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendingsPage,
    DonePage,
    AddPage,
    DoneFilterPipe,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendingsPage,
    DonePage,
    AddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WishesListService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
