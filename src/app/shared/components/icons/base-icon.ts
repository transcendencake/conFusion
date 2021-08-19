import { Component, Input, OnInit } from "@angular/core";

@Component({
  templateUrl: './icons.component.html'
})
export abstract class BaseIcon implements OnInit {
  @Input() isLg: any;
  iconClass: string = '';
  ngOnInit(): void {
    this.isLg = this.isLg !== undefined;
    this.iconClass = `fa ${this.iconClass} ${this.isLg ? 'fa-lg' : ''}`;
  }
}