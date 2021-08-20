import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";
import { TEMPLATE_PATH } from "./icons.const";

@Component({
  selector: 'app-icon-sign-in',
  templateUrl: TEMPLATE_PATH
})
export class SignInIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-sign-in"
  }
}