import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";

@Component({
  selector: 'app-icon-info',
  templateUrl: '../icons.component.html'
})
export class InfoIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-info"
  }
}