import { Component } from "@angular/core";
import { BaseIcon } from "./base-icon";

@Component({
  selector: 'app-icon-twitter',
  templateUrl: './icons.component.html'
})
export class TwitterIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-twitter"
  }
}