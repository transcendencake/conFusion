import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";
import { TEMPLATE_PATH } from "./icons.const";

@Component({
  selector: 'app-icon-facebook',
  templateUrl: TEMPLATE_PATH
})
export class FacebookIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-facebook"
  }
}