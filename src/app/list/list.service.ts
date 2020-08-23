import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Item } from './models/Item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  itemsCollection: AngularFirestoreCollection<Item>;
  list: Observable<Item[]>;
  listDoc: AngularFirestoreDocument<Item>;

  constructor(public afs: AngularFirestore) {
    // this.lists = this.afs.collection('lists').valueChanges();

    this.itemsCollection = this.afs.collection('lists', (ref) =>
      ref.orderBy('title', 'asc')
    );

    this.list = this.itemsCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );

    console.log('service called', this.list);
  }

  getList() {
    return this.list;
  }

  addItem(item: Item) {
    this.itemsCollection.add(item);
  }
  deleteItem(item: Item) {
    this.listDoc = this.afs.doc(`lists/${item.id}`);
    this.listDoc.delete();
  }

  updateItem(item: Item) {
    this.listDoc = this.afs.doc(`lists/${item.id}`);
    this.listDoc.update(item);
  }
}
