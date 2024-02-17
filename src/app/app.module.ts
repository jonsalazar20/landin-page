import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'
import { SectionServicesComponent } from './components/section-services/section-services.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { CardDoctorComponent } from './components/card-doctor/card-doctor.component';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { NewsLetterComponent } from './components/news-letter/news-letter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionServicesComponent,
    DoctorsComponent,
    CardDoctorComponent,
    MessageFormComponent,
    NewsLetterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
