import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishService } from '../services/dish.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html'
})
export class DishdetailComponent implements OnInit {
  dish?: IDish;

  constructor(private dishService: DishService,
    private location: Location,
    private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.dish = this.dishService.getDish(id);
  }

  goBack() {
    this.location.back();
  }
}
