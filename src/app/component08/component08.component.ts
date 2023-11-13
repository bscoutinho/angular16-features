import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-component08',
  templateUrl: './component08.component.html',
  styleUrls: ['light-theme.scss', 'dark-theme.scss']
})

// SIGNALS Example - Chat Service
export class Component08Component {

  newMessage = '';


  constructor(public chatService: ChatService) {}
  
  send() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
}
