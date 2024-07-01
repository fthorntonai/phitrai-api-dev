import { Component } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule],
  templateUrl: './app.component.html',
  providers:[    {provide: APP_BASE_HREF, useValue: environment.baseUrl}
],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    return "testing";
  }
  isCollapsed = false;
}
