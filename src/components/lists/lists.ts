import { Component, Input } from '@angular/core';
import { WishesListService } from '../../services/wishes.service';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { AddPage } from '../../pages/add/add.component';
import { List } from '../../models';

@Component({
  selector: 'lists',
  templateUrl: 'lists.html'
})
export class ListsComponent {

  @Input() finished: boolean = false;

  constructor(  public wishesService: WishesListService,
                private navController: NavController,
                private alertController: AlertController) {
  }

  listSelected(listItem: List) {
    this.navController.push(AddPage, {
      title: listItem.title,
      list: listItem
    });
  }

  editList(listItem: List, slidingItem: ItemSliding) {
    slidingItem.close();
    
    const alert = this.alertController.create({
      title: 'Edit List',
      message: 'Name of the list you wish to edit',
      inputs: [
        {
          name: 'title',
          placeholder: 'List name',
          value: listItem.title
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler : data => {
            if(data.title.length === 0) {
              return;
            }
            listItem.title = data.title;
            this.wishesService.saveStorage();
          }
        }
      ]
    })

    alert.present();
  }

  deleteList(listItem: List) {
    this.wishesService.deleteList(listItem);
  } 

}
