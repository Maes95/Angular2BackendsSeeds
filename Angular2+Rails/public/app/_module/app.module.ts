import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from '../app/app.component';

import { ExampleComponent } from '../components/example/example.component';

import { routing }        from '../_routing/app.routing';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
