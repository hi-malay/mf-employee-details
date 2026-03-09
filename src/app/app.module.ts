import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [EmptyRouteComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
