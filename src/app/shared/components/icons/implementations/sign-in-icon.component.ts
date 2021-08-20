import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";

@Component({
  selector: 'app-icon-sign-in',
  templateUrl: '../icons.component.html'
})
export class SignInIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-sign-in"
  }
}