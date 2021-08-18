import { Component, Input, OnInit } from "@angular/core";

@Component({
  templateUrl: './icons.component.html'
})
export abstract class BaseIcon implements OnInit {
  @Input() isLg? : string;

  iconClass: string = '';

  ngOnInit(): void {
    this.iconClass = `fa ${this.iconClass} ${this.isLg !== undefined ? 'fa-lg' : ''}`;
  }
}