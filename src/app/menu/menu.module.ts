import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { MenuPage } from "./menu.page";

const routes: Routes = [
  {
    path: "",
    component: MenuPage,
    children: [
      {
        path: "tabs",
        loadChildren: "../tabs/tabs.module#TabsPageModule"
      },
      {
        path: "messages",
        loadChildren: "../messages/messages.module#MessagesPageModule"
      },
      {
        path: "notifications",
        loadChildren:
          "../notifications/notifications.module#NotificationsPageModule"
      },
      {
        path: "places",
        loadChildren: "../places/places.module#PlacesPageModule"
      },
      {
        path: "settings",
        loadChildren: "../settings/settings.module#SettingsPageModule"
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}