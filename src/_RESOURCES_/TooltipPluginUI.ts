import {Plugin} from 'ckeditor5';
import {addToolbarActions} from "./utils/toolbarUI";

export default class TooltipPluginUI extends Plugin {
    init() {
        addToolbarActions(this)
    }

}
