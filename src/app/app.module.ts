import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { AmountPipe } from './amount.pipe';
import {TypePipe} from './type.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    NewComponent,
    AmountPipe,
    TypePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
