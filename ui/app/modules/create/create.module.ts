import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from '@approot/modules/create/pages/student/students.page';

const routes: Routes = [
    {path: '**', component: StudentsComponent}
];

@NgModule({
    declarations: [StudentsComponent],
    imports: [CommonModule, FormsModule, RouterModule.forChild(routes)]
})
export class CreateModule { }
