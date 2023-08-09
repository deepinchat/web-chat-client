import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpTransportType, HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { environment } from 'src/environments/environment';

const CHAT_HUB_URL = `${environment.apiGateWay}/hub/chats`;
@Injectable({
  providedIn: 'root'
})
export class ChatHubService {
  private hubConnection?: HubConnection;
  constructor(
    private authService: AuthService,
  ) {
  }

  public start() {
    this.register();
    this.stablishConnection();
    this.registerHandlers();
  }

  public stop() {
    this.hubConnection?.stop();
  }

  private register() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(CHAT_HUB_URL, {
        accessTokenFactory: () => this.authService.getAccessTokenAsync(),
        transport: HttpTransportType.WebSockets
      })
      .configureLogging(LogLevel.Warning)
      .withAutomaticReconnect()
      .build();
  }

  private stablishConnection() {
    this.hubConnection?.start()
      .then(() => {
        console.log('Hub connection started')
      })
      .catch(() => {
        console.log('Error while establishing connection')
      });
  }

  private registerHandlers() {
    this.hubConnection?.on('new_chat_message', (msg) => {
      console.log(`New chat message recevied:${msg}`);
    });
  }
}
