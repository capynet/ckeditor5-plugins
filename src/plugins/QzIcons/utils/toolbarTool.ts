import {type Plugin} from '@ckeditor-imports/index'
import FormView from "./form"
import _showUIDropdownToolbarIcons from "./_showUIDropdownToolbarIcons";

const addToolbarTool = (plugin: Plugin) => {
    const editor = plugin.editor
    const t = editor.t

    const formView = new FormView(plugin)

    editor.ui.componentFactory.add('btnQzIcons', locale => {
        return _showUIDropdownToolbarIcons(plugin)
    });
}

export {addToolbarTool}
