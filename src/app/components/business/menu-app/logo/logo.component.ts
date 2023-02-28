import { Component, Input } from '@angular/core';
import { MenuAppService } from '../../../../services/business/menu-app.service';

import { APP_PREFIX } from '../../../../constants/app.constant';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  APP_PREFIX: string = APP_PREFIX;
  
  @Input()
  isOpenMenu: boolean | null | undefined;

  constructor(private menuService: MenuAppService) {

  }

  openCloseMenu() {
    this.menuService.openCloseMenu(!this.isOpenMenu);
  }
}