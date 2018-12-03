import { Component } from "@angular/core";
import { WishesListService } from "../../services/wishes.service";
import { List, ListItem } from "../../models";
import { NavParams } from "ionic-angular";

@Component ({
  selector: 'add-page',
  templateUrl: 'add.component.html'
})

export class AddPage {
  
  list: List;
  itemName: string = '';

  constructor( public wishesService: WishesListService, private navParams: NavParams ) {
    const title = this.navParams.get("title");

    if (this.navParams.get("list")) {
      this.list = this.navParams.get("list");
    }
    else {
      this.list = new List(title);
      this.wishesService.addList(this.list);
    }
  }

  addItem() {
    if(this.itemName.length === 0) {
      return;
    }
    const itemList = new ListItem(this.itemName);
    this.list.items.push(itemList);
    this.wishesService.saveStorage();

    this.itemName = '';
  }

  updateTask(item: ListItem) {
    item.finished = !item.finished;

    const pendings_count = this.list.items.filter( itemData => {
      return !itemData.finished;
    }).length;
    if (pendings_count === 0) {
      this.list.finished = true;
      this.list.finished_at = new Date();
    }
    else{
      this.list.finished = false;
      this.list.finished_at = null;
    }
    this.wishesService.saveStorage();
  }

  delete(index: number) {
    this.list.items.splice(index,1);
    this.wishesService.saveStorage();
  }

}
