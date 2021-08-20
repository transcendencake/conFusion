import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";
import { TEMPLATE_PATH } from "./icons.const";

@Component({
  selector: 'app-icon-linkedin',
  templateUrl: TEMPLATE_PATH
})
export class LinkedinIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-linkedin"
  }
}