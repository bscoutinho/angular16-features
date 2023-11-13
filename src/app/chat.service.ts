import { Injectable, OnDestroy, signal } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService implements OnDestroy {

  socketSubs: Subscription;
  messagesSignal = signal<string[]>([]);
  private socket$ = webSocket<string>('ws://chatserver.com');

  constructor() {
    this.socketSubs = this.socket$.subscribe(
      (message: string) => this.messagesSignal.mutate(messages => messages.push(message))
    );
  }
  sendMessage(msg: string) {
    this.socket$.next(msg);
  }
  ngOnDestroy() {
    this.socketSubs?.unsubscribe();
  }
}
