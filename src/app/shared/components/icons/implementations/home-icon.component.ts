import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";

@Component({
  selector: 'app-icon-home',
  templateUrl: '../icons.component.html'
})
export class HomeIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-home"
  }
}