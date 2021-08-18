import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";

@Component({
  selector: 'app-icon-linkedin',
  templateUrl: '../icons.component.html'
})
export class LinkedinIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-linkedin"
  }
}