import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const CHAT_ENDPOINT = `${environment.apiGateWay}/chatting`;

enum ChatType {
  Dialogue = 1,
  Group = 2,
  Channel = 3,
  Public = 4,
}

interface CreateChatCommand {
  name: string;
  avatarId: string;
  link: string;
  description: string;
  type: ChatType;
  isPrivate: boolean;

}

interface ChatModel extends CreateChatCommand {
  id: string;
  createdAt: string;
  updatedAt: string;
  isVerified: string;
}

@Injectable({
  providedIn: 'root'
})
class ChatService {
  constructor(
    private httpClient: HttpClient
  ) { }

  create(command: CreateChatCommand) {
    return this.httpClient.post<ChatModel>(`${CHAT_ENDPOINT}/api/v1/chats`, command);
  }

  getById(id: string) {
    return this.httpClient.get<ChatModel>(`${CHAT_ENDPOINT}/api/v1/chats/${id}`);
  }

  getList() {
    return this.httpClient.get<Array<ChatModel>>(`${CHAT_ENDPOINT}/api/v1/chats`);
  }
}
export {
  CreateChatCommand,
  ChatModel,
  ChatType,
  ChatService
}