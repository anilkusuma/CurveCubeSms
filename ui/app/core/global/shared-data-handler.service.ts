import { Injectable } from '@angular/core';
import { User } from 'app/models/user.model';

@Injectable()
export class SharedDataHandlerService {
    private loggedInUser: User;
    private loggedInUserAccount: any;

    constructor() { }

    setLoggedInUser(user: User) {
        this.loggedInUser = user;
    }

    getLoggedInUser(): User {
        return this.loggedInUser;
    }
}
