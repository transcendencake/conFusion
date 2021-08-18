import { Injectable } from '@angular/core';
import { DISHES } from '../shared/constants/dishes.constants';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  getDishes(): IDish[] {
    return DISHES;
  }

  getDish(id: string): IDish | undefined {
    return DISHES.find((p) => p.id === id);
  }
  
  getFeaturedDish(): IDish | undefined {
    return DISHES.find((p) => p.featured == true);
  }
}
