import {type Plugin, icons, Dialog} from 'ckeditor5';

let modal

const _initModal = (plugin: Plugin) => {
    modal = plugin.editor.plugins.get(Dialog);
}

const _showUIModal = (plugin: Plugin, formView) => {
    //https://ckeditor.com/docs/ckeditor5/latest/framework/architecture/ui-library.html#dialogs-and-modals
    modal.show({
        icon: icons.pencil,
        title: 'This is a modal',
        // Do not display the "Close" button.
        hasCloseButton: true,
        isModal: true,
        content: [formView],
        actionButtons: [
            {
                label: 'Confirm',
                class: 'ck-button-action',
                withText: true,
                onExecute: () => modal.hide()
            }
        ],
    });

    formView.focus();
}

export {_initModal, _showUIModal}