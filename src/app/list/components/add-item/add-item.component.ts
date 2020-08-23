import { Component, OnInit } from '@angular/core';
import { ListService } from '../../list.service';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  newItem: Item = {
    title: '',
    isChecked: false,
    description: '',
  };

  constructor(private listService: ListService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.newItem.title != '') {
      this.listService.addItem(this.newItem);
      this.newItem.title = '';
    }
  }
}
