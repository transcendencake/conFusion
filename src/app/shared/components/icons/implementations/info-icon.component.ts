import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";
import { TEMPLATE_PATH } from "./icons.const";

@Component({
  selector: 'app-icon-info',
  templateUrl: TEMPLATE_PATH
})
export class InfoIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-info"
  }
}