import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {InputModel} from '@app/shared/components/input/input.model';


@Component({
    selector: 'app-material-input-field',
    template:
        `<div class="material-input-field-root">
            <div class="material-input-field input-field">
                <input #inputValue type="{{input.type}}" id="{{input.id}}" name="{{input.name}}" (blur)="setValue(inputValue.value)"
                       (focus)="inputFocused()">
                <label for="{{input.name}}">{{input.label}}</label>
            </div>
            <div *ngIf="input.showError" class="material-input-field-validation-error error{{input.name}} error{{input.id}}">
                <div id="{{input.id}}-error" class="error-container">
                    {{ input.errorString }}
                </div>
            </div>
        </div>`,
    styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent {
    @Input() input: InputModel;
    @Output() inputChanged = new EventEmitter<InputModel>();

    setValue(value: string) {
        this.input.value = value;
        this.inputChanged.emit(this.input);
        this.input.validateInput();
        console.log('New value is ' + this.input.value);
    }

    inputFocused() {
        this.input.showError = false;
    }
}

