import {Component, OnInit} from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-home-navigation-bar',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    ngOnInit(): void {
        setTimeout(() => {
            $('.sidenav').sidenav();
            $('.collapsible').collapsible({
                accordion : true
            });
        }, 0, true);
    }
}
