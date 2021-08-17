import { Component, Inject } from '@angular/core';

@Component({
  template: ``
})
export abstract class BaseFontAwesomeIconComponent {
  constructor(@Inject(String) iconClass: string) { 
    this.className = `fa ${iconClass}`
  }

  className: string;
}
