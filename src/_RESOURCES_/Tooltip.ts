import {Plugin} from 'ckeditor5';
import TooltipPluginUI from './TooltipPluginUI';
import TooltipPluginEditing from './TooltipPluginEditing';

/*
Esto esta muuy bueno para estructurar el codigo mejor: https://ckeditor.com/docs/ckeditor5/latest/framework/tutorials/widgets/implementing-an-inline-widget.html
 * Schema y converters.
 * como conectar: de un dropdown pico un boton y me muestra un formulario que al confirmar pinta algo en cke.
 * Como desde un boton o dropdown renderixo alto totalmente arbitrario qwue sea como un form
 * Como puedo modificar cosas simples de un componente directamente en cke.
 */


export default class Tooltip extends Plugin {
    static get requires() {
        return [TooltipPluginEditing, TooltipPluginUI];
    }
}

