import { Injectable } from '@angular/core';
import { PROMOTIONS } from '../shared/constants/promotions.constants';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  getPromotions(): IPromotion[] {
    return PROMOTIONS;
  }

  getPromotion(id: string): IPromotion | undefined {
    return PROMOTIONS.find((p) => p.id === id);
  }
  
  getFeaturedPromotion(): IPromotion | undefined {
    return PROMOTIONS.find((p) => p.featured == true);
  }
}
