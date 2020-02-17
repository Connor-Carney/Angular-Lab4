import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';

  imageHide: boolean = true;
  count: number = 0;
  buttonPressed() {
    this.count++;
  }
  imageClick() {
    if (this.imageHide == false) {
      this.imageHide = true;
    }
    else {
      this.imageHide = false;
    }
  }
}
