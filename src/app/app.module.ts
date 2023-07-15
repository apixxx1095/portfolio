import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './my-services/services.component';
import { LoadingComponent } from './useful-components/loading/loading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DialogCustomComponent } from './useful-components/dialog-custom/dialog-custom.component';
import { DataExchangeService } from './services/data-exchange.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    ServicesComponent,
    LoadingComponent,
    DialogCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    ButtonModule,
    DialogModule
  ],
  providers: [DataExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
