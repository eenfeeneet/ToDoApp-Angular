import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ListService } from '../../list.service';
import { Item } from '../../models/Item';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  newItem: Item = {
    id: '',
    title: '',
    isChecked: null,
    description: '',
  };

  constructor(
    private listService: ListService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
    console.log('item opened', this.item);
  }
  setClasses() {
    let classes = {
      item: true,
      'is-complete': this.item.isChecked,
    };

    return classes;
  }

  onToggle() {
    console.log('toggled');
    this.item.isChecked = !this.item.isChecked;

    console.log('new change', this.item);

    this.listService.updateItem(this.item);
  }

  onSubmit() {
    console.log('changes made', this.item);

    this.listService.updateItem(this.item);
  }
  onClick() {
    this.listService.deleteItem(this.item);
  }
}
