import {Component, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedFeature = 'recipe';

  constructor() {
  }

  onNavigate($event: string) {
    this.loadedFeature = $event;
  }
}
