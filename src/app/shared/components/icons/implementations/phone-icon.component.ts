import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";

@Component({
  selector: 'app-icon-phone',
  templateUrl: '../icons.component.html'
})
export class PhoneIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-phone"
  }
}