import { UserStatus } from 'app/models/user-status.model';
import { UserType } from 'app/models/user-type.model';
import { Account } from '@approot/models/account.model';

export class User {
    userId: string;
    userName: string;
    type: UserType;
    status: UserStatus;
    accountId: string;
    firstName: string;
    lastName: string;
    address: string;
    emailId: string;
    mobileNumber: number;
    sex: string;
    firstTimeLogin: boolean;
    forceResetPassword: boolean;
    userAccount: Account;

    constructor() { }

    static create(user: any): User {
        const newUser = new User();
        newUser.userId = user.id;
        newUser.accountId = user.accountId;
        newUser.type = UserType[user.type as string];
        newUser.firstName = user.firstName;
        newUser.lastName = user.lastName;
        newUser.address = user.address;
        newUser.emailId = user.emailId;
        newUser.mobileNumber = user.mobileNumber;
        newUser.sex = user.sex;
        newUser.status = UserStatus[user.status as string];
        newUser.firstTimeLogin = user.firstTimeLogin;
        newUser.forceResetPassword = user.forceResetPassword;
        if (user.account) {
            newUser.userAccount = Account.create(user.account);
        }
        return newUser;
    }
}
