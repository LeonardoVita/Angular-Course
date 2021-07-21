import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http"
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
import { FakeapiModule } from './fakeapi/fakeapi.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent    
  ],
  imports: [
    BrowserModule,        
    HttpClientModule,
    RouterModule.forRoot([     
      { path: "welcome", component: WelcomeComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: "welcome", pathMatch: "full"},
    ]),
    ProductModule,
    FakeapiModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 