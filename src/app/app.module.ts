import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FanPageComponent } from './components/fan-page/fan-page.component';
import { FormsModule } from '@angular/forms';
import { FanItemComponent } from './components/fan-item/fan-item.component';
import { RandomUserService } from './services/random-user.service';

@NgModule({
  declarations: [
    AppComponent,
    FanPageComponent,
    FanItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RandomUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
