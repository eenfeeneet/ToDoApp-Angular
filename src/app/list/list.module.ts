import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ListComponent } from './list.component';
import { ItemComponent } from './components/item/item.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ListService } from './list.service';

import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import {
  CheckCircle,
  Circle,
  TrashFill,
  PlusCircle,
  ArrowDownShort,
  ArrowUpShort,
} from 'ngx-bootstrap-icons';

// Select some icons (use an object, not an array)
const icons = {
  CheckCircle,
  Circle,
  TrashFill,
  PlusCircle,
  ArrowDownShort,
  ArrowUpShort,
};

@NgModule({
  declarations: [ListComponent, AddItemComponent, ItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxBootstrapIconsModule.pick(icons),
    NgbModule,
  ],
  exports: [ListComponent],
  providers: [ListService],
})
export class ListModule {}
