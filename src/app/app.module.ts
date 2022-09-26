import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WhyusComponent } from './whyus/whyus.component';
import { LatestnewsComponent } from './latestnews/latestnews.component';
import { CustomersayComponent } from './customersay/customersay.component';
import { MajorclientsComponent } from './majorclients/majorclients.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomepageComponent,
    OurservicesComponent,
    AboutusComponent,
    WhyusComponent,
    LatestnewsComponent,
    CustomersayComponent,
    MajorclientsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
