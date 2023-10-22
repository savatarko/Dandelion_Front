import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TokensubmitComponent} from "./components/tokensubmit/tokensubmit.component";
import {EntityextractionComponent} from "./components/entityextraction/entityextraction.component";
import {TextsimilarityComponent} from "./components/textsimilarity/textsimilarity.component";
import {LanguagedetectionComponent} from "./components/languagedetection/languagedetection.component";
import {SentimentanalysisComponent} from "./components/sentimentanalysis/sentimentanalysis.component";
import {HistoryComponent} from "./components/history/history.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {
    path: "login",
    component: TokensubmitComponent
  },
  {
    path: "entity-extraction",
    component: EntityextractionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "text-similarity",
    component: TextsimilarityComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "language-detection",
    component: LanguagedetectionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "sentiment-analysis",
    component: SentimentanalysisComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "history",
    component: HistoryComponent
  },
  {
    path: "",
    component: TokensubmitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
