import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";
import { TEMPLATE_PATH } from "./icons.const";

@Component({
  selector: 'app-icon-phone',
  templateUrl: TEMPLATE_PATH
})
export class PhoneIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-phone"
  }
}