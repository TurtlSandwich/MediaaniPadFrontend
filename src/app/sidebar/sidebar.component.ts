import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
    ngOnInit(): void {
        console.log('Sidebar component werkt');
    }

    selectedMenu: string = "";

    selectCategory(selectedValue: string) {
        this.selectedMenu = selectedValue;
    }
}
