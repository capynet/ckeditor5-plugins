import {type Plugin, addMenuToDropdown, createDropdown, ButtonView, addToolbarToDropdown} from 'ckeditor5';

import icon3 from '../../ckeditor3.svg?raw';
import icon4 from '../../ckeditor4.svg?raw';
const _showUIDropdownToolbar = (plugin: Plugin) => {
    const buttons = [];

    const btn1 = new ButtonView(plugin.editor.locale);
    btn1.set({label: plugin.editor.t('Foo'), icon: icon3, tooltip: true});
    plugin.listenTo(btn1, 'execute', () => {
        console.log("hacer algo");
    });

    const btn2 = new ButtonView(plugin.editor.locale);
    btn2.set({label: plugin.editor.t('Bar'), icon: icon3, tooltip: true});
    plugin.listenTo(btn2, 'execute', () => {
        console.log("Narangas polimerosas");
    });

    buttons.push(btn1);
    buttons.push(btn2);

    const dropdownView = createDropdown(plugin.editor.locale);

    dropdownView.buttonView.set({
        withText: true,
        label: 'Toolbar',
        icon: icon4,
        tooltip: true,
    });


    addToolbarToDropdown(dropdownView, buttons);

    return dropdownView
}

export default _showUIDropdownToolbar