import {Component, OnInit} from '@angular/core';
import {SharedMessageService} from '@approot/core';

@Component({
    template: `<div> Hello Students</div>`,
})
export class StudentsComponent implements OnInit {
    private messageService: SharedMessageService;

    constructor(sharedMessageService: SharedMessageService) {
        this.messageService = sharedMessageService;
    }

    ngOnInit(): void {
        console.log('Students Component initialized');
        this.messageService.broadcast('SetPreloaderEvent', false);
    }
}
