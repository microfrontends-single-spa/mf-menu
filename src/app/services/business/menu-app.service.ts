import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { IMenuState, getIsOpenMenu, setIsOpenMenu } from "../../store/business/menu-app.store";

@Injectable()
export class MenuAppService {
    
    constructor(private menuStore: Store<{menuReducer: IMenuState}>) {

    }

    getIsOpenMenu(): any {
        return this.menuStore.pipe(select(getIsOpenMenu));
    }

    openCloseMenu(flag: boolean) {
        this.menuStore.dispatch(setIsOpenMenu({isOpenMenu: flag}));
    }
}