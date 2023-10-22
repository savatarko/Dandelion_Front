import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokensubmitComponent } from './components/tokensubmit/tokensubmit.component';
import {FormsModule} from "@angular/forms";
import { EntityextractionComponent } from './components/entityextraction/entityextraction.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TextsimilarityComponent } from './components/textsimilarity/textsimilarity.component';
import { LanguagedetectionComponent } from './components/languagedetection/languagedetection.component';
import { SentimentanalysisComponent } from './components/sentimentanalysis/sentimentanalysis.component';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    TokensubmitComponent,
    EntityextractionComponent,
    TextsimilarityComponent,
    LanguagedetectionComponent,
    SentimentanalysisComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
