import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Persona } from './model/model';
import { ContextService } from './context.service';
import { BodyComponent } from './body/body.component';
import { ServiziomessaggiService } from './serviziomessaggi.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ContextService, ServiziomessaggiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
