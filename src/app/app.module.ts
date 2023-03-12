
import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CardsComponent } from './components/cards/cards.component';
import { OffercardComponent } from './components/offercard/offercard.component';
import { PatientreviewcardComponent } from './components/patientreviewcard/patientreviewcard.component';
import { ArticlecardComponent } from './components/articlecard/articlecard.component';
import { MpcardComponent } from './components/mpcard/mpcard.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';






@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsComponent,
    OffercardComponent,
    PatientreviewcardComponent,
    ArticlecardComponent,
    MpcardComponent,
    FooterComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



  