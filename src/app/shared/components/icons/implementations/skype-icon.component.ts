import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";

@Component({
  selector: 'app-icon-skype',
  templateUrl: '../icons.component.html'
})
export class SkypeIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-skype"
  }
}