import {Plugin, icons, Command} from 'ckeditor5/src/core'
import {
    ClickObserver,
    ViewDocumentClickEvent,
    ViewContainerElement
} from 'ckeditor5/src/engine'
import {
    addToolbarToDropdown,
    View,
    SwitchButtonView,
    submitHandler,
    LabeledFieldView,
    createLabeledInputText,
    createLabeledTextarea,
    ButtonView,
    createDropdown,
    ViewModel,
    addListToDropdown,
    ListDropdownItemDefinition,
    ContextualBalloon,
    clickOutsideHandler
} from 'ckeditor5/src/ui'
import {isWidget, toWidget} from 'ckeditor5/src/widget'
import {Collection} from 'ckeditor5/src/utils'

export {
    Plugin,
    ClickObserver,
    ViewDocumentClickEvent,
    View,
    SwitchButtonView,
    submitHandler,
    LabeledFieldView,
    createLabeledInputText,
    createLabeledTextarea,
    ButtonView,
    createDropdown,
    ViewModel,
    addListToDropdown,
    ListDropdownItemDefinition,
    isWidget,
    toWidget,
    ViewContainerElement,
    ContextualBalloon,
    clickOutsideHandler,
    Collection,
    icons,
    Command,
    addToolbarToDropdown
}