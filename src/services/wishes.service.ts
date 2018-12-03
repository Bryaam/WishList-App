import { Injectable } from "@angular/core";
import { List } from "../models";

@Injectable()
export class WishesListService {

  lists: List[] = [];

  constructor() {
    console.log("Wishes serive started");
    this.loadStorage();
  }

  addList(list: List) {
    this.lists.push(list);
    this.saveStorage();
  }

  deleteList(list: List) {
    this.lists = this.lists.filter( listData => {
      return listData.id !== list.id
    });
    this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  loadStorage() {
    if(localStorage.getItem('data')) {
      this.lists = JSON.parse(localStorage.getItem('data'));
    }
  }

}
