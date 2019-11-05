import { ErrorCode } from 'app/core/error-handling/error-code.model';

export class ServiceError {
    errorCode: ErrorCode;
    errorMessage: string;

    constructor(errorCode: ErrorCode, errorMessage: string) {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
    }
}
