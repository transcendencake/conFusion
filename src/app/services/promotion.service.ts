import { Injectable } from '@angular/core';
import { PROMOTIONS } from '../shared/constants/promotions.constants';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  getPromotions(): IPromotion[] {
    return PROMOTIONS;
  }

  getPromotion(id: string) {
    return PROMOTIONS.find((p) => p.id === id);
  }
  
  getFeaturedPromotion() {
    return PROMOTIONS.find((p) => p.featured == true);
  }
}
