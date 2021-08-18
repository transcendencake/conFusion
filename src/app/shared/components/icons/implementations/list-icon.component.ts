import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";

@Component({
  selector: 'app-icon-list',
  templateUrl: '../icons.component.html'
})
export class ListIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-list"
  }
}