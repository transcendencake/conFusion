import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";

@Component({
  selector: 'app-icon-address-card',
  templateUrl: '../icons.component.html'
})
export class AddressCardIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-address-card"
  }
}