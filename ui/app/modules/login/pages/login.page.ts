import {Component, OnInit} from '@angular/core';
import {InputModel} from '@app/shared/components/input/input.model';
import {AuthenticationService} from '@app/core/authentication/authentication.service';
import {RouteHandler} from '@app/core/routes/route-handler.service';
import {InitializationService} from '@app/core/initialization/initialization.service';

@Component({
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.css']
})
export class LoginComponent implements OnInit {
    private authentication: AuthenticationService;
    private routeHandler: RouteHandler;
    private initializationHandler: InitializationService;

    userNameInput = new InputModel('userName', 'Username');
    passwordInput = new InputModel('userPassword', 'Password', 'password');
    rememberMe: boolean = false;

    constructor(authenticationService: AuthenticationService, routeHandler: RouteHandler,
                initializationService: InitializationService) {
        this.authentication = authenticationService;
        this.routeHandler = routeHandler;
        this.initializationHandler = initializationService;
    }

    ngOnInit(): void {
        console.log('Login Component initialized ');
        // if (this.authentication.isUserLoggedIn()) { this.routeHandler.redirectToRoute('home'); }
    }

    login() {

        if (!this.isValidInput()) { return; }

        this.authentication.loginUser(this.userNameInput.value,
                this.passwordInput.value, this.rememberMe).subscribe((loginStatus) => {
            if (!loginStatus) { this.handleInvalidCredentials(); return; }
            this.initializationHandler.init();
        });
    }

    isValidInput() {
        const userNameValid = this.userNameInput.validateInput();
        const passwordValid =  this.passwordInput.validateInput();
        return (userNameValid && passwordValid);
    }

    handleInvalidCredentials() {
        const errorString = 'Invalid Username and Password';
        this.passwordInput.value = '';
        this.passwordInput.errorString = errorString;
        this.userNameInput.errorString = errorString;
        this.userNameInput.showError = true;
        this.passwordInput.showError = true;
    }

}

