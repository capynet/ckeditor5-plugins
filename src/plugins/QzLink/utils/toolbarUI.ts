import {ButtonView, type Plugin} from "ckeditor5";
import {_initBalloon, _showUIBalloon} from "./_balloon";
import {_initModal, _showUIModal} from "./_modal";
import _showUIDropdownList from "./_showUIDropdownList";
import _showUIDropdownToolbar from "./_showUIDropdownToolbar";
import _showUIDropdownMenu from "./_showUIDropdownMenu";
import FormView from "./form";
import icon from '../assets/ckeditor.svg?raw';
import icon2 from '../assets/ckeditor1.svg?raw';
import icon3 from '../assets/ckeditor3.svg?raw';


const addToolbarActions = (plugin: Plugin) => {
    const editor = plugin.editor;
    const t = editor.t;

    _initModal(plugin)
    _initBalloon(plugin)
    const formView = new FormView(plugin);

    editor.ui.componentFactory.add('btnJustAddComp', locale => {
        const btn = new ButtonView(locale);
        btn.set({label: t('Add the component'), icon: icon, tooltip: true});
        plugin.listenTo(btn, 'execute', () => editor.execute('insertComponentCommand'));
        return btn;
    });

    editor.ui.componentFactory.add('btnBalloon', locale => {
        const btn = new ButtonView(locale);
        btn.set({label: t('Presents a form through a balloon (in place form) for configuring the component before inserting it'), icon: icon2, tooltip: true});
        plugin.listenTo(btn, 'execute', () => {
            _showUIBalloon(plugin, formView);
        });
        return btn;
    });

    editor.ui.componentFactory.add('btnModal', locale => {
        const btn = new ButtonView(locale);
        btn.set({label: t('modal'), icon: icon3, tooltip: true});
        plugin.listenTo(btn, 'execute', () => {
            _showUIModal(plugin, formView);
        });
        return btn;
    });

    editor.ui.componentFactory.add('btnDropdownList', locale => {
        return _showUIDropdownList(plugin)
    });

    editor.ui.componentFactory.add('btnDropdownToolbar', locale => {
        return _showUIDropdownToolbar(plugin)
    });

    editor.ui.componentFactory.add('btnDropdownMenu', locale => {
        return _showUIDropdownMenu(plugin)
    });
}

export {addToolbarActions}