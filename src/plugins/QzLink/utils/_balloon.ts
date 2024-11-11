import {type Plugin, ContextualBalloon, clickOutsideHandler} from 'ckeditor5';

let _balloon

const _initBalloon = (plugin: Plugin) => {
    _balloon = plugin.editor.plugins.get(ContextualBalloon);
}

const _showUIBalloon = (plugin: Plugin, formView) => {
    _balloon.add({
        view: formView,
        position: _getBalloonPositionData(plugin)
    });

    // Hide the form view when clicking outside the balloon.
    clickOutsideHandler({
        emitter: formView,
        activator: () => _balloon.visibleView === formView,
        contextElements: [_balloon.view.element],
        callback: () => _hideUIBalloon(plugin, formView)
    });

    formView.focus();
}

const _getBalloonPositionData = (plugin: Plugin) => {
    const view = plugin.editor.editing.view;
    const viewDocument = view.document;
    let target = null;

    // Set a target position by converting view selection range to DOM
    target = () => view.domConverter.viewRangeToDom(viewDocument.selection.getFirstRange());

    return {
        target
    };
}

const _hideUIBalloon = (plugin: Plugin, formView) => {
    // Clear the input field values and reset the form.
    formView.abbrInputView.fieldView.value = '';
    formView.titleInputView.fieldView.value = '';
    formView.element.reset();

    _balloon.remove(formView);

    // Focus the editing view after inserting the abbreviation so the user can start typing the content
    // right away and keep the editor focused.
    plugin.editor.editing.view.focus();
}


export {_initBalloon, _showUIBalloon}