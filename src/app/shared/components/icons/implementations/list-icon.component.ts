import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";
import { TEMPLATE_PATH } from "./icons.const";

@Component({
  selector: 'app-icon-list',
  templateUrl: TEMPLATE_PATH
})
export class ListIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-list"
  }
}