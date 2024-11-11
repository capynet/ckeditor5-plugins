import {type Plugin, addMenuToDropdown, createDropdown, ButtonView, addToolbarToDropdown, Collection, ViewModel, addListToDropdown, ListDropdownItemDefinition} from 'ckeditor5';

import icon4 from '../../ckeditor4.svg?raw';
const _showUIDropdownToolbar = (plugin: Plugin) => {
    const dropdownView = createDropdown(plugin.editor.locale);

    dropdownView.buttonView.set({
        withText: true,
        label: 'Items list',
        icon: icon4,
        tooltip: true,
    });

    const items = new Collection();

    items.add({
        type: 'button',
        model: new ViewModel({
            withText: true,
            label: 'Foo'
        })
    });

    items.add({
        type: 'button',
        model: new ViewModel({
            withText: true,
            label: 'Bar'
        })
    });

    addListToDropdown(dropdownView, items as Collection<ListDropdownItemDefinition>);
    return dropdownView
}

export default _showUIDropdownToolbar