import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitNavComponent } from './git-nav/git-nav.component';
import { GitFormComponent } from './git-form/git-form.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { DayCountPipe } from './day-count.pipe';
import { UserServiceService } from './user-service.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GitNavComponent,
    GitFormComponent,
    RepoListComponent,
    DayCountPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
