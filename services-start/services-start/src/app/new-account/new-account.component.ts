import { AccountsService } from "./../accounts.service";
import { Component, EventEmitter, Output } from "@angular/core";
import { loggingService } from "../logging.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  //providers: [loggingService],
})
export class NewAccountComponent {
  constructor(
    private logService: loggingService,
    private accountsService: AccountsService
  ) {
    this.accountsService.statusUpdated.subscribe((status: string) =>
      alert("New status:" + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // const service = new loggingService();
    // service.logStatusChange(accountStatus);
    //this.logService.logStatusChange(accountStatus);
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
