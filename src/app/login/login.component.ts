import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component ({
  templateUrl: './login.component.html' 
})
export class LoginComponent {
  user = {username: '', password: '', remember: false};

  constructor(public dialog: MatDialogRef<LoginComponent>) {}

  onSubmit() {
    this.dialog.close();
  }
}