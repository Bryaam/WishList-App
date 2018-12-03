import { Component } from "@angular/core";
import { WishesListService } from "../../services/wishes.service";
import { List } from "../../models";

@Component ({
  selector: 'done-page',
  templateUrl: 'done.component.html'
})

export class DonePage {

  constructor( public wishesService: WishesListService ) {
    
  }

}
