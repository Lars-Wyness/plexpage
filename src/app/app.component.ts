import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'plexpage';

  goToPort(port: string) {
    window.location.href = `http://192.168.1.24:${port}`;
  }
}
