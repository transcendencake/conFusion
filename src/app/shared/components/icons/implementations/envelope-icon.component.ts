import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";
import { TEMPLATE_PATH } from "./icons.const";

@Component({
  selector: 'app-icon-envelope',
  templateUrl: TEMPLATE_PATH
})
export class EnvelopeIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-envelope-o"
  }
}