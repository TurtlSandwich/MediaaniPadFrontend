import { CategoryService } from '../_service/category.service';
import { MenuItemService } from '../_service/menu-item.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../_models/menu-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[];

  constructor(private menuItemsService: MenuItemService, private categoryservice: CategoryService) { }

  ngOnInit(): void {
    this.loadMenu();
  }

  loadMenu(){    
    this.menuItemsService.getMenuItemsByCategoryId(this.categoryservice.selectedCategoryId).subscribe((response: MenuItem[]) => {
      this.menuItems = response;
    })
  }

}
