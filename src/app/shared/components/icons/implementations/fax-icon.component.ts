import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";
import { TEMPLATE_PATH } from "./icons.const";

@Component({
  selector: 'app-icon-fax',
  templateUrl: TEMPLATE_PATH
})
export class FaxIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-fax"
  }
}