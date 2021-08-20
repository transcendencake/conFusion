import { Component, Input, OnInit } from "@angular/core";
import { AngularResolveOptionalAttribute } from "../../helpers/boolean-attributes.helper";

@Component({
  templateUrl: './icons.component.html'
})
export abstract class BaseIcon implements OnInit {
  @Input() isLg? : string;

  iconClass: string = '';

  ngOnInit(): void {
    this.iconClass = `fa ${this.iconClass} ${AngularResolveOptionalAttribute<string>(this.isLg, 'fa-lg', '')}`;
  }
}