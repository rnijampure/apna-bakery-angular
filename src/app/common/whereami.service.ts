import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';

import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class WhereamiService {
  _location: Location;
  haiKya: boolean = false;
  constructor(
    private router: Router,
    public location: Location,
    public route: ActivatedRoute
  ) {
    this._location = location;
  }

  getCurrentLocation(): string {
    return this.location.path();
  }
  islocationThis(url: string): Observable<any> {
    let myloc = of(this.location.path().includes(url));
    return myloc;
    //   return (this.haiKya = this.location.path().includes(url));
  }
}
