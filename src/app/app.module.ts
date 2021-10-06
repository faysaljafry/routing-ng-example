import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: '', component: HomeComponent },
  { path: 'servers', component: ServersComponent },
  //{ path : 'users', component: UsersComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    ServerComponent,
    EditServerComponent,
    UserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
