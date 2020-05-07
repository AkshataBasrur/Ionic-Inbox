import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { FolderPageRoutingModule } from "./folder-routing.module";

import { FolderPage, ModalPage } from "./folder.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FolderPageRoutingModule],

  entryComponents: [ModalPage],
  declarations: [FolderPage, ModalPage]
})
export class FolderPageModule {}
