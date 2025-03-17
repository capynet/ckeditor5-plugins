import {Plugin} from '@ckeditor-imports/index'
import EnhancedLinkEditing from './enhancedLinkEditing'
import EnhancedLinkUI from './enhancedLinkUI'

export default class EnhancedLink extends Plugin {
    static get requires() {
        return [EnhancedLinkEditing, EnhancedLinkUI]
    }

    static get pluginName() {
        return 'EnhancedLink'
    }
}