import { Component, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuAppService } from '../../../services/business/menu-app.service';

import { APP_PREFIX } from '../../../constants/app.constant';

@Component({
  selector: 'menu-app',
  templateUrl: './menu-app.component.html',
  styleUrls: ['./menu-app.component.scss']
})
export class MenuAppComponent {

  APP_PREFIX: string = APP_PREFIX;
  isOpenMenu$!: Observable<boolean>;
  menus: any[] = [];
  menuSelected: any;

  constructor(private menuApp: ElementRef, private menuService: MenuAppService) {

  }

  ngOnInit() {
    this.isOpenMenu$ = this.menuService.getIsOpenMenu();

    this.menus.push(
      {
        "id": 1,
        "icon": "fa-solid fa-house nav-icon",
        "label": "Primeros pasos",
        "path": "firts-step"
      },
      {
        "id": 2,
        "icon": "fa-sharp fa-solid fa-store nav-icon",
        "label": "Tiendas",
        "path": "stores"
      },
      {
        "id": 3,
        "icon": "fa-solid fa-book nav-icon",
        "label": "Secciones",
        "path": "sections"
      }, 
      {
        "id": 4,
        "icon": "fa-sharp fa-solid fa-bag-shopping nav-icon",
        "label": "Productos",
        "path": "products"
      },
      {
        "id": 5,
        "icon": "fa-solid fa-bullhorn nav-icon",
        "label": "Publicidad",
        "path": "advertising",
        "childs": [
          {
            "id": 51,
            "icon": "fa-solid fa-house nav-icon",
            "label": "Plantillas",
            "path": "templates"
          },
          {
            "id": 52,
            "icon": "fa-solid fa-house nav-icon",
            "label": "Segmentos",
            "path": "segments"
          },
          {
            "id": 53,
            "icon": "fa-solid fa-house nav-icon",
            "label": "Configuración",
            "path": "publicity"
          }
        ]
      },
      {
        "id": 6,
        "icon": "fa-solid fa-message nav-icon",
        "label": "Whatsapp",
        "path": "whatsapp"
      },
    );

    const handleEventOpenCloseMenu: any = (event: any) => {
      const detail = event["detail"];
      if (detail) {
        this.menuService.openCloseMenu(detail.isOpenMenu);
      }
    };

    window.addEventListener(
      "evt-open-panel-menu",
      handleEventOpenCloseMenu
    );
  }
}