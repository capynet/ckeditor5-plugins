import {Plugin} from 'ckeditor5';
import {addToolbarActions} from "./utils/toolbarUI";

export default class PluginUI extends Plugin {
    init() {
        addToolbarActions(this)
    }

}
