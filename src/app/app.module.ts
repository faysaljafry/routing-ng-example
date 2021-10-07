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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { HttpClient } from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }],
  },
  { path: '', component: HomeComponent },
  {
    path: 'servers',
    component: ServersComponent,
    children: [
      { path: ':id/edit', component: EditServerComponent },
      { path: ':id', component: ServerComponent },
    ],
  },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }, //Always write at the end of the routing list
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
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //HttpClient,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
