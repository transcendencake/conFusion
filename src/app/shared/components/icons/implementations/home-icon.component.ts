import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";
import { TEMPLATE_PATH } from "./icons.const";

@Component({
  selector: 'app-icon-home',
  templateUrl: TEMPLATE_PATH
})
export class HomeIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-home"
  }
}