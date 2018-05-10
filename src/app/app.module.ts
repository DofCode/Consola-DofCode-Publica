import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AuthService } from './providers/auth.service';

//Rutas
import { RouterModule, Routes } from '@angular/router';
import { app_routing, appRoutingProviders } from './app.routes';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { InfoComponent } from './components/info/info.component';
import { SeguimientoComponent } from './components/seguimiento/seguimiento.component';
import { ChatComponent } from './components/chat/chat.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsProjectsComponent } from './components/settings-projects/settings-projects.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyDlYiOTp0IzUBpuu8NcDHSFy2YLr-mdiVc",
  authDomain: "dofcode-67dc4.firebaseapp.com",
  databaseURL: "https://dofcode-67dc4.firebaseio.com",
  projectId: "dofcode-67dc4",
  storageBucket: "",
  messagingSenderId: "482989958868"
};
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelpComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ProyectoComponent,
    InfoComponent,
    SeguimientoComponent,
    ChatComponent,
    ProfileComponent,
    SettingsProjectsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    app_routing,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
