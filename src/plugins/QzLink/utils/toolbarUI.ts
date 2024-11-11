import {ButtonView, type Plugin} from "ckeditor5";
import {_initBalloon, _showUIBalloon} from "./_balloon";
import FormView from "./form";
import icon2 from '../assets/ckeditor1.svg?raw';


const addToolbarActions = (plugin: Plugin) => {
    const editor = plugin.editor;
    const t = editor.t;

    _initBalloon(plugin)
    const formView = new FormView(plugin);

    editor.ui.componentFactory.add('btnBalloon', locale => {
        const btn = new ButtonView(locale);
        btn.set({label: t('Insert a button'), icon: icon2, tooltip: true});

        plugin.listenTo(btn, 'execute', () => {
            _showUIBalloon(plugin, formView);
        });

        return btn;
    });

}

export {addToolbarActions}