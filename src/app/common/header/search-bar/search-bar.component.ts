import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {
  NgbTypeaheadConfig,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { searchItemsLists } from '../../../constants.ts/constants';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [NgbTypeaheadModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  model: any;
  @Input() val: any;
  constructor(config: NgbTypeaheadConfig, private router: Router) {
    // customize default values of typeaheads used by this component tree
    config.showHint = true;
  }
  @Output() newItemEvent = new EventEmitter<string>();
  selectedItem(item: any) {
    //this.clickedItem = item.item;
    //this.router.navigate(['search']);

    this.router.navigate(['/search'], {
      queryParams: { name: item.item },
      skipLocationChange: false,
    });
    this.newItemEvent.emit(item.item);
    // console.log('item', item);
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2
          ? []
          : searchItemsLists
              .filter((v: any) =>
                v.toLowerCase().startsWith(term.toLocaleLowerCase())
              )
              .splice(0, 10)
      )
    );
}
