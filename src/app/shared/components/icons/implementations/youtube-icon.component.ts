import { Component } from "@angular/core";
import { BaseIcon } from "../base-icon";
import { TEMPLATE_PATH } from "./icons.const";

@Component({
  selector: 'app-icon-youtube',
  templateUrl: TEMPLATE_PATH
})
export class YoutubeIcon extends BaseIcon {
  constructor() {
    super();
    this.iconClass = "fa-youtube"
  }
}