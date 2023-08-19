import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserProfileDTO } from './user.service';
import { PagedQuery, PagedResult } from '../models/pagination.model';

const MESSAGING_ENDPOINT = `${environment.apiGateWay}/messaging`;

export interface MessageQueryModel extends PagedQuery {
  chatId?: string;
  keywords?: string;
  from?: string;
}

export interface PostMessageDTO {
  chatId: string;
  content: string;
  replyTo: string;
}
export interface MessageData {
  id: string;
  createdAt: number;
  from: string;
  chatId: string;
  modifiedAt: number;
  user: UserProfileDTO;
  content: string;
}
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(
    private httpClient: HttpClient
  ) { }

  send(model: PostMessageDTO) {
    return this.httpClient.post<MessageData>(`${environment.apiGateWay}/api/v1/messages`, model);
  }

  list(query: MessageQueryModel) {
    if (!query.keywords) {
      delete query.keywords;
    }
    if (!query.from) {
      delete query.from;
    }
    return this.httpClient.get<PagedResult<MessageData>>(`${MESSAGING_ENDPOINT}/api/v1/messages`, {
      params: query as any
    });
  }
}
