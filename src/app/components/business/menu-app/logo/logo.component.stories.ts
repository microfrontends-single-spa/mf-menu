import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular';

import { LogoComponent } from './logo.component';

import { PLANTILLA_HTML } from "../../../../constants/storybook.constant";
import { APP_PREFIX } from '../../../../constants/app.constant';
import { MenuAppService } from '../../../../services/business/menu-app.service';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { reducerForRoot } from "../../../../store";

const TITULO = `LOGO`;

const SUMMARY = `
    El componente <strong>LOGO</strong> Presenta el logo de la empresa, en el se definen las siguientes <strong>propiedades</strong>`;

const PROPS = `
    <li><strong>isOpenMenu</strong>: Cambia el logo según la resolución de la pantalla</li>
`;

const COMPONENT_BASE = `
<div style="width: 100%; margin-top: 20px">
    <logo></logo>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2023-01-30][Luis Amat] Creación del componente</span>
`;

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Logo',
    component: LogoComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, StoreModule.forRoot(reducerForRoot)]
        }),
        componentWrapperDecorator(story => {
            return PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${story}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`);
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
    "isOpenMenu": false
};