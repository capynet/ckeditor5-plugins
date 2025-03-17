import {Plugin} from '@ckeditor-imports/index'
import PluginUI from './PluginUI'
import PluginEditing from './PluginEditing'

export default class QzLink extends Plugin {
    static get requires() {
        return [PluginEditing, PluginUI]
    }
}

