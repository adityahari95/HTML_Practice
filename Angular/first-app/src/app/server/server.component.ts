import { Component } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',

})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';
    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    getServerStatus() {
        this.getServerStatus();
    }
    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}