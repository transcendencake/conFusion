import { Component } from "@angular/core";
import { BaseIcon } from "./base-icon";

@Component({
  selector: 'app-icon-envelope',
  templateUrl: './icons.component.html'
})
export class EnvelopeIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-envelope-o"
  }
}