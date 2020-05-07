import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  IonInput,
  ModalController,
  NavParams,
  ActionSheetController,
} from "@ionic/angular";

@Component({
  selector: "app-folder",
  templateUrl: "./folder.page.html",
  styleUrls: ["./folder.page.scss"],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    public actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get("id");
  }

  @ViewChild("name", { static: false }) name: IonInput;
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        name: this.name.value,
      },
    });
    return await modal.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Action",
      buttons: [
        {
          text: "Reply",
          icon: "enter-sharp",
          handler: () => {
            console.log("Reply email clicked");
          },
        },
        {
          text: "Forward",
          icon: "exit-sharp",
          handler: () => {
            console.log("Forward email clicked");
          },
        },
        {
          text: "Save",
          icon: "download-sharp",
          handler: () => {
            console.log("Save email clicked");
          },
        },
        {
          text: "Delete",
          icon: "trash-sharp",
          handler: () => {
            console.log("Delete email clicked");
          },
        },
      ],
    });
    await actionSheet.present();
  }
}

@Component({
  selector: "modal-page",
  templateUrl: "modal.page.html",
  styleUrls: ["modal.page.scss"],
})
export class ModalPage {
  modalContent: string;

  constructor(navParams: NavParams) {
    if (navParams.get("name")) {
      this.modalContent = "Hello Mates! I am  " + navParams.get("name");
    } else {
      this.modalContent = "Hello Mates!";
    }
  }
}
