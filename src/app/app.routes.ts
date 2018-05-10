import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./components/home/home.component";
import {HelpComponent} from "./components/help/help.component";
import { LoginComponent } from './components/login/login.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { InfoComponent } from './components/info/info.component';
import { SeguimientoComponent } from './components/seguimiento/seguimiento.component';
import { ChatComponent } from './components/chat/chat.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsProjectsComponent } from './components/settings-projects/settings-projects.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const app_routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'help', component: HelpComponent
  },
  {
    path: 'p/:id',
    component: ProyectoComponent,
    children: [
        {
          path: '',
          redirectTo: 'i', pathMatch: 'full'
        },
        {
          path: 'i',
          component: InfoComponent
        },
        {
          path: 'tracing',
          component: SeguimientoComponent
        },
        {
          path: 'chat',
          component: ChatComponent
        },
        {
          path: 'settings',
          component: SettingsProjectsComponent
        }
      ]

  },
  { path: '**', component: NotFoundComponent}
];

export const appRoutingProviders: any[] = [
];

export const app_routing = RouterModule.forRoot(app_routes);
