import { NgModule } from '@angular/core';
import { MaterialInputComponent, RootPreloaderComponent } from '@approot/shared';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        RootPreloaderComponent,
        MaterialInputComponent
    ],
    imports: [CommonModule, FormsModule],
    exports: [RootPreloaderComponent, MaterialInputComponent]
})
export class SharedModule { }
