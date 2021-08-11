import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../shared/models/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent {
  @Input()
  dish?: Dish;
}
