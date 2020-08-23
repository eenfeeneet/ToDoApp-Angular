import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ListModule } from './list/list.module';
import { ListService } from './list/list.service';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    NgbModule,

    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ListModule,
  ],
  providers: [ListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
