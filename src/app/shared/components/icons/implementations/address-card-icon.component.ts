import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";
import { TEMPLATE_PATH } from "./icons.const";

@Component({
  selector: 'app-icon-address-card',
  templateUrl: TEMPLATE_PATH
})
export class AddressCardIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-address-card"
  }
}