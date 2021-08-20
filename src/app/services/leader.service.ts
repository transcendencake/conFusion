import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/constants/leaders.constants';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  getLeaders(): ILeader[] {
    return LEADERS;
  }
  
  getLeader(id: string): ILeader | undefined {
    return LEADERS.find(l => l.id === id);
  }
}
