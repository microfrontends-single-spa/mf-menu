import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular';

import { LogoComponent } from './logo/logo.component';
import { MenuAppComponent } from './menu-app.component';

import { PLANTILLA_HTML } from "../../../constants/storybook.constant";
import { APP_PREFIX } from '../../../constants/app.constant';
import { MenuAppService } from '../../../services/business/menu-app.service';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { reducerForRoot } from "../../../store";

const TITULO = `MENU`;

const SUMMARY = `
    El componente <strong>MENU</strong> Representa el menú de la aplicación, en el se definen las siguientes <strong>propiedades</strong>`;

const PROPS = `
    <li><strong>isOpenMenu</strong>: Cambia el ancho del menú y el logo de la aplicación</li>
`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2023-01-30][Luis Amat] Creación del componente</span>
`;

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'MenuApp',
    component: MenuAppComponent,
    decorators: [
        moduleMetadata({
            declarations: [LogoComponent],
            imports: [CommonModule, StoreModule.forRoot(reducerForRoot)]
        }),
        componentWrapperDecorator(story => {
            return PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `<div style="mix-width: 300px; margin-top: 20px">${story}</div>`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`);
        }),
    ]
} as Meta;

const Template: Story = (args) => ({
    moduleMetadata: {
        providers: [
            { provide: MenuAppService }
        ]
    },
    props: args,
})

export const Base = Template.bind({});
Base.args = {
    APP_PREFIX,
    menus: [
        {
            "id": 1,
            "icon": "fa-solid fa-house nav-icon",
            "label": "Primeros pasos"
        },
        {
            "id": 2,
            "icon": "fa-sharp fa-solid fa-store nav-icon",
            "label": "Tienda"
        },
        {
            "id": 3,
            "icon": "fa-solid fa-book nav-icon",
            "label": "Secciones"
        }, {
            "id": 4,
            "icon": "fa-sharp fa-solid fa-bag-shopping nav-icon",
            "label": "Productos"
        }
    ]
};