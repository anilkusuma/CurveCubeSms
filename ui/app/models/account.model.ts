import { AccountType } from '@approot/models/account-type.model';
import { AccountStatus } from '@approot/models/account-status.model';
import { UserType } from '@approot/models/user-type.model';
import { UserStatus } from '@approot/models/user-status.model';

export class Account {
    accountId: string;
    name: string;
    type: AccountType;
    status: AccountStatus;
    displayName: string;
    address: string;
    emailId: string;
    mobileNumber: number;
    parentAccountId: string;
    parentAccount: Account;
    customization: any;

    constructor() { }

    static create(account: any): Account {
        console.log(account);
        const newAccount = new Account();
        newAccount.accountId = account.id;
        newAccount.name = account.name;
        newAccount.type = AccountType[account.type as string];
        newAccount.displayName = account.displayName;
        newAccount.address = account.address;
        newAccount.emailId = account.emailId;
        newAccount.mobileNumber = account.mobileNumber;
        newAccount.status = AccountStatus[account.status as string];
        newAccount.customization = account.customization;
        newAccount.parentAccountId = account.parentAccountId;

        return newAccount;
    }
}
