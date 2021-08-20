import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { getImagePath } from '../shared/utils/assetsUtils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private dialog: MatDialog) {
    this.logoPath = getImagePath(this.logoPath);
  }
  
  logoPath: string = 'logo.png';
  
  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});    
  }
}
