export class InputModel {
    id: string;
    label: string;
    name: string;
    type = 'text';
    classes: string[];
    value: string;
    valueValid = false;
    showError = false;
    errorString: string;
    validate: any;

    constructor(id: string, label: string, type?: string, classes?: string[], validate?: any) {
        this.id = id;
        this.label = label;
        this.name = id;
        if (type) { this.type = type; }
        this.classes = [id];
        if (classes) { this.classes.concat(classes); }
        this.value = '';
        this.validate = validate;
    }

    validateInput(): boolean {
        const defaultErrorString: string = 'Please enter a value';
        if (!this.value.replace(/\s/g, '').length) {
            this._setAsInValid(defaultErrorString);
        } else {
            if (this.validate) {
                const errorString = this.validate(this.value);
                if (errorString) {
                    this._setAsInValid(errorString);
                    return false;
                }
            }
            this._setAsValid();
            return true;
        }
    }

    _setAsInValid(errorString: string) {
        this.errorString = errorString;
        this.valueValid = false;
        this.showError = true;
    }

    _setAsValid() {
        this.errorString = '';
        this.valueValid = true;
        this.showError = false;
    }
}
