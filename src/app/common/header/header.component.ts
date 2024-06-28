import { Component } from '@angular/core';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { WhereamiService } from '../whereami.service';

import { JsonPipe } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { RouterModule } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchBarComponent, JsonPipe, RouterModule],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // router: string;
  _location: any;
  myloc: any;
  haiKya: boolean = false;
  constructor(
    private router: Router,
    public location: WhereamiService,
    public route: ActivatedRoute
  ) {
    this._location = location;
  }
  @Output() showCart = new EventEmitter<string>();

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        //  console.log('val', val.url.includes('/search'));
        if (val.url.includes('/search')) {
          this.haiKya = true;
        } else {
          this.haiKya = false;
        }
      }
    });
  }
}
