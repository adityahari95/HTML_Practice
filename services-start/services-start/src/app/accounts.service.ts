import { loggingService } from "./logging.service";
import { stringify } from "querystring";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: "Master Account",
      status: "active",
    },
    {
      name: "Testaccount",
      status: "inactive",
    },
    {
      name: "Hidden Account",
      status: "unknown",
    },
  ];
  statusUpdated = new EventEmitter<string>();

  constructor(private logService: loggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.logService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.logService.logStatusChange(status);
  }
}
