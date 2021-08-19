import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";

@Component({
  selector: 'app-icon-fax',
  templateUrl: '../icons.component.html'
})
export class FaxIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-fax"
  }
}