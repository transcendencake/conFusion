import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/models/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit { 

  dishes: Dish[] = [];

  selectedDish: Dish | undefined;

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishes = this.dishService.getDishes();
  }

  onSelect(dish: Dish): void {
    this.selectedDish = dish;
  }

}
