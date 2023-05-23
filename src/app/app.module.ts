import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  declarations: [ //components, pipes, directives  -> UI 
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsComponent,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
