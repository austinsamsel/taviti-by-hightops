import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2MapModule} from 'ng2-map';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ClassDetailsComponent } from './class-details/class-details.component';

require('foundation-sites')

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ClassDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2MapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
