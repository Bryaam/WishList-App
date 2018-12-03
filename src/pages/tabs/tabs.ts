import { Component } from '@angular/core';

import { PendingsPage } from '../pendings/pendings.component';
import { DonePage } from "../done/done.component";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendingsPage;
  tab2Root = DonePage;

  constructor() {

  }
}
