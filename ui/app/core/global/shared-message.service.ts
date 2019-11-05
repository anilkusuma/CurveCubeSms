import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

interface Message {
    type: string;
    payload: any;
}

type MessageCallback = (payload: any) => void;

@Injectable()
export class SharedMessageService {
    private handler = new Subject<Message>();

    broadcast(type: string, payload: any) {
        this.handler.next({ type, payload });
    }

    subscribe(type: string, callback: MessageCallback): Subscription {
        return this.handler.subscribe((message) => {
            if (message.type === type) {
                callback(message.payload);
            }
        });
    }
}
