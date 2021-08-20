import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {

  Leaders: ILeader[] = [];

  constructor(private leaderService: LeaderService) { }

  ngOnInit(): void {
    this.Leaders = this.leaderService.getLeaders();
  }

}
