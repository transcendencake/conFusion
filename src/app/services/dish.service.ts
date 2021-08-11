import { Injectable } from '@angular/core';
import { Dish } from '../shared/models/dish';
import { DISHES } from '../shared/constants/dishes.constants';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  getDishes(): Dish[] {
    return DISHES;
  }
}
