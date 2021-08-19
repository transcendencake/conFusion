import { Component } from "@angular/core";
import { BaseIcon } from "./base-icon";

@Component({
  selector: 'app-icon-youtube',
  templateUrl: './icons.component.html'
})
export class YoutubeIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-youtube"
  }
}