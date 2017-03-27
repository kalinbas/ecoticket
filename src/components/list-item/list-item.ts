import { Component, Input } from '@angular/core';


@Component({
  selector: 'list-item',
  templateUrl: 'list-item.html'
})
export class ListItemComponent {

  @Input() item: any;

  constructor() {
   
  }

}
