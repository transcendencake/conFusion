import { Injectable } from '@angular/core';
import { DISHES } from '../shared/constants/dishes.constants';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  getDishes(): IDish[] {
    return DISHES;
  }
}
