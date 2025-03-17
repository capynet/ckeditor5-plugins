import {
    Plugin,
    ContextualBalloon,
    ButtonView,
} from '@ckeditor-imports/index'
import EnhancedLinkFormView from './enhancedLinkFormView'
import LinkSizeCommand from './commands/linkSizeCommand'
import LinkButtonCommand from './commands/linkButtonCommand'
import EnhancedLinkCommand from "./commands/enhancedLinkCommand";
import pluginIcon from './assets/plugin-button.svg?raw'

export default class EnhancedLinkUI extends Plugin {
    formView: EnhancedLinkFormView | null = null
    balloon: ContextualBalloon

    static get requires() {
        return [ContextualBalloon]
    }

    static get pluginName() {
        return 'EnhancedLinkUI'
    }

    init() {
        const editor = this.editor
        this.balloon = editor.plugins.get(ContextualBalloon)

        // Add commands
        editor.commands.add('linkSize', new LinkSizeCommand(editor))
        editor.commands.add('linkButton', new LinkButtonCommand(editor))
        editor.commands.add('enhancedLink', new EnhancedLinkCommand(editor))

        this._createToolbarLinkButton()
        this._createViews()
    }

    _createViews() {
        const editor = this.editor
        this.formView = new EnhancedLinkFormView(this.editor.locale)

        // Handle form submit
        this.listenTo(this.formView, 'submit', () => {
            const { value: url } = this.formView.urlInputView.fieldView.element
            const size = this.formView.size
            const isButton = this.formView.isButton

            editor.execute('linkSize', size)
            editor.execute('linkButton', isButton)
            editor.execute('enhancedLink', url)

            this._hideUI()
        })

        // Handle form cancel
        this.listenTo(this.formView, 'cancel', () => {
            this._hideUI()
        })
    }

    _hideUI() {
        this.balloon.remove(this.formView)
        this.editor.editing.view.focus()
    }

    _createToolbarLinkButton() {
        const editor = this.editor
        const t = editor.t

        editor.ui.componentFactory.add('enhancedLink', locale => {
            const button = new ButtonView(locale)
            button.set({
                label: t('Link'),
                icon: pluginIcon,
                keystroke: 'Ctrl+K',
                tooltip: true
            })

            button.bind('isEnabled').to(editor.commands.get('enhancedLink'))
            button.on('execute', () => this._showUI())

            return button
        })
    }

    _showUI() {
        const editor = this.editor

        if (!this.formView) {
            this._createViews()
        }

        this.balloon.add({
            view: this.formView,
            position: this._getBalloonPositionData()
        })

        this.formView.focus()
    }

    _getBalloonPositionData() {
        const view = this.editor.editing.view
        const selection = view.document.selection
        return { target: view.domConverter.viewRangeToDom(selection.getFirstRange()) }
    }
}