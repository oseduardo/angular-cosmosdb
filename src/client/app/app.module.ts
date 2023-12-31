import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { AuthInterceptor } from './auth.interceptor';
import { LoginComponent } from './login.component';
import { ToastComponent } from './toast.component';
import { ToastService } from './toast.service';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [AppComponent, HeroesComponent, LoginComponent, ToastComponent, SafePipe],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    HeroService,
    ToastService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
      deps: [ToastService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
