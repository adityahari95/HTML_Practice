import { Component, OnInit } from "@angular/core";
import { AccountsService } from "./accounts.service";
import { stringify } from "querystring";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];
  constructor(private accountService: AccountsService) {}
  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
}
