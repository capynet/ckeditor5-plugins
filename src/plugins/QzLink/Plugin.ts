import {Plugin} from 'ckeditor5';
import PluginUI from './PluginUI';
import PluginEditing from './PluginEditing';
import "./style.css"

export default class QzLink extends Plugin {
    static get requires() {
        return [PluginEditing, PluginUI];
    }
}

