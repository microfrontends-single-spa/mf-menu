import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";

//States
interface IMenuState {
    isOpenMenu: boolean
}

const state: IMenuState = {
    isOpenMenu: false
}

//Actions
const setIsOpenMenu = createAction('menuStore/setIsOpenMenu', props<{ isOpenMenu: boolean }>());

//Reduces
const menuReducer = createReducer(state,
    on(setIsOpenMenu, (state, action) => ({ isOpenMenu: action.isOpenMenu }))
);

//Selectors
const getIsOpenMenuState = createFeatureSelector<IMenuState>('menuReducer');
const getIsOpenMenu = createSelector(
    getIsOpenMenuState,
    (state: IMenuState) => state.isOpenMenu
);
export {
    setIsOpenMenu,
    getIsOpenMenu,
    menuReducer,
    IMenuState
}