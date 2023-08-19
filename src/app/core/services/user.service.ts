import { Injectable } from '@angular/core';

export interface UserProfileDTO {
  userId: string;
  userName: string;
  name: string;
  avatarId: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

}
