import { Component } from "@angular/core";
import { WishesListService } from "../../services/wishes.service";
import { List } from "../../models";
import { NavController, AlertController } from "ionic-angular";
import { AddPage } from "../add/add.component";

@Component ({
  selector: 'pendings-page',
  templateUrl: 'pendings.component.html'
})

export class PendingsPage {

  constructor(  public wishesService: WishesListService,
                private navController: NavController,
                private alertController: AlertController ) {
    
  }

  addList() {
    // this.navController.push(AddPage);
    const alert = this.alertController.create({
      title: 'New List',
      message: 'Name of the list you wish to add',
      inputs: [
        {
          name: 'title',
          placeholder: 'List name'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Add',
          handler : data => {
            if(data.title.length === 0) {
              return;
            }
            this.navController.push( AddPage, {
              title: data.title
            });
          }
        }
      ]
    })

    alert.present();
  }

}
