import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';

import { Item } from './models/Item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list: Item[];

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.listService.getList().subscribe((list) => {
      this.list = list;
    });
  }
}
