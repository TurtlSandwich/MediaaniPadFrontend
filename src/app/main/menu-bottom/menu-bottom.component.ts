import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu-bottom',
    templateUrl: './menu-bottom.component.html',
    styleUrls: ['./menu-bottom.component.scss']
})

export class MenuBottomComponent implements OnInit {
    ngOnInit(): void {
        console.log('Menu-bottom component werkt');
    }
}