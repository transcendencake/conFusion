import { Component } from "@angular/core";
import { BaseIcon } from "./base-icon";

@Component({
  selector: 'app-icon-google-plus',
  templateUrl: './icons.component.html'
})
export class GooglePlusIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-google-plus"
  }
}