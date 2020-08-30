import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  // selector: 'app-servers',
  selector: 'app-servers',
  // template: `<app-server></app-server>
  //           <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // allowNewServer = false;
  // serverCreationStatus = 'No server was created';
  // serverName = 'Testserver';
  // UserName = "";
  // allowUserName = false;
  // UserNameCreated = false;
  displayDetails = true;
  showContent = 'Secretname';
  ids = [];
  mom: any;
  // constructor() {
  //   setTimeout(() => {
  //     this.allowNewServer = true;
  //   }, 2000);

  // }
  // constructor() {
  //   // this.allowUserName = true;
  //   // setTimeout(() => {
  //   //   this.allowUserName = true;
  //   // }, 2000);


  // }
  ngOnInit(): void {
  }
  // toggle() {
  //   this.displayDetails = true;
  // }
  selBtn() {
    this.displayDetails = true;
    this.ids.push(this.ids.length + 1);
    //this.timestamp();
    // console.log(this.ids);
  }
  timestamp() {

    this.ids.push(new Date());


  }


  // onCreateServer() {
  //   this.serverCreationStatus = 'Server was created: Name is ' + this.serverName;
  // }
  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;

  // // }
  // onNewUserName() {
  //   this.UserNameCreated = true;
  //   // this.UserName = '';
}


