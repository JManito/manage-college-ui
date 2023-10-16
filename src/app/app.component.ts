import { Component } from '@angular/core';
import { HomepageService } from './features/services/homepage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Manage a Virtual College';

  constructor() {
  }
}