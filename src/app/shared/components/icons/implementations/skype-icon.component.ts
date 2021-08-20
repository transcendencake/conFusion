import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";
import { TEMPLATE_PATH } from "./icons.const";

@Component({
  selector: 'app-icon-skype',
  templateUrl: TEMPLATE_PATH
})
export class SkypeIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-skype"
  }
}