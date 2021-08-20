import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";

@Component({
  selector: 'app-icon-facebook',
  templateUrl: '../icons.component.html'
})
export class FacebookIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-facebook"
  }
}