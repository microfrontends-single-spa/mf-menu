export const PLANTILLA_HTML = `
<div class="storybook-contenedor">
    <span class="storybook-titulo">$$TITULO$$</span>
    <div class="storybook-cuerpo">
        <div>
            <p class="storybook-resumen storybook-texto">$$SUMMARY$$</p>
            <ul class="storybook-propiedades" style="margin-top: 20px">
                $$PROPS$$
            </ul>
            <div style="display:flex;align-items: center;justify-content: center;">
                $$COMPONENT$$
            </div>
            <div style="margin-top: 10px">
                <p class="storybook-resumen storybook-texto"><strong>Autor:</strong> $$AUTOR$$</p>
            </div>
            <div class="storybook-historial" style="margin-top: 10px">
                <p class="storybook-resumen" style="margin-bottom: 10px"><strong>Historial de modificaciones</strong></p>
                $$HISTORY$$
            </div>
        </div>
    </div>
</div>`;