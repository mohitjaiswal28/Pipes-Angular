import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UppercasePipe } from './shared/pipes/uppercase.pipe';
import { FormatphonePipe } from './shared/pipes/formatphone.pipe';
import { TextlimitPipe } from './shared/pipes/textlimit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UppercasePipe,
    FormatphonePipe,
    TextlimitPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
