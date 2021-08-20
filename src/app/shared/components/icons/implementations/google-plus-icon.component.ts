import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";
import { TEMPLATE_PATH } from "./icons.const";

@Component({
  selector: 'app-icon-google-plus',
  templateUrl: TEMPLATE_PATH
})
export class GooglePlusIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-google-plus"
  }
}