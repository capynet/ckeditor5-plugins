import {type Plugin, addMenuToDropdown, createDropdown} from 'ckeditor5';

import icon5 from '../assets/ckeditor5.svg?raw';
const _showUIDropdownMenu = (plugin: Plugin) => {
    const dropdownView = createDropdown(plugin.editor.locale);

    dropdownView.buttonView.set({
        withText: true,
        label: 'Menu',
        icon: icon5,
        tooltip: true,
    });

    const definition = [
        {
            id: 'menu_1',
            menu: 'Menu 1',
            children: [
                {
                    id: 'menu_1_a',
                    label: 'Item A'
                },
                {
                    id: 'menu_1_b',
                    label: 'Item B'
                }
            ]
        },
        {
            id: 'top_a',
            label: 'Top Item A'
        },
        {
            id: 'top_b',
            label: 'Top Item B'
        }
    ];

    addMenuToDropdown(dropdownView, plugin.editor.ui.view.body, definition);

    return dropdownView
}

export default _showUIDropdownMenu