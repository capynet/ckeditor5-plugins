import {
    View,
    ButtonView,
    LabeledFieldView,
    createLabeledDropdown,
    addListToDropdown,
    FocusTracker, KeystrokeHandler,
    Locale,
    Collection
} from '@ckeditor-imports/index'

const SIZES = [
    {text: 'Normal', value: 'normal'},
    {text: 'Large', value: 'large'},
    {text: 'Huge', value: 'huge'}
]

export default class EnhancedLinkFormView extends View {
    public urlInputView: LabeledFieldView
    public sizeDropdown: ReturnType<typeof createLabeledDropdown>
    public buttonCheckbox: View & { isOn: boolean }
    public saveButtonView: ButtonView
    public cancelButtonView: ButtonView
    public readonly focusTracker: FocusTracker
    public readonly keystrokes: KeystrokeHandler

    constructor(locale: Locale) {
        super(locale)

        // Create URL input
        this.urlInputView = this._createUrlInput()

        // Create size dropdown
        this.sizeDropdown = this._createSizeDropdown()

        // Create button checkbox
        this.buttonCheckbox = this._createButtonCheckbox()

        // Create action buttons
        this.saveButtonView = this._createButton('Save', {withText: true})
        this.cancelButtonView = this._createButton('Cancel', {withText: true})

        // Create focus tracker and keystroke handler
        this.focusTracker = new FocusTracker()
        this.keystrokes = new KeystrokeHandler()

        this._setupForm()
    }

    private _createUrlInput() {
        const t = this.locale.t
        const urlInput = new LabeledFieldView(this.locale, createLabeledInputText)

        urlInput.label = t('Link URL')

        return urlInput
    }

    private _createSizeDropdown() {
        const t = this.locale.t
        const dropdown = createLabeledDropdown(this.locale)

        dropdown.set({
            label: t('Link size'),
            class: 'ck-link-size-dropdown'
        })

        const items = new Collection()
        SIZES.forEach(size => items.add({
            type: 'button',
            model: {
                text: t(size.text),
                value: size.value
            }
        }))

        addListToDropdown(dropdown, items)

        return dropdown
    }

    private _createButtonCheckbox() {
        const t = this.locale.t
        const checkbox = new View(this.locale)

        checkbox.setTemplate({
            tag: 'label',
            attributes: {
                class: ['ck', 'ck-button-checkbox']
            },
            children: [{
                tag: 'input',
                attributes: {
                    type: 'checkbox',
                    'data-value': 'true'
                }
            },
                {
                    tag: 'span',
                    attributes: {
                        class: ['ck', 'ck-button-checkbox__label']
                    },
                    children: [t('Show as button')]
                }]
        })

        return checkbox
    }

    private _createButton(label: string, options = {}) {
        const button = new ButtonView(this.locale)

        button.set({
            label,
            ...options
        })

        return button
    }

    private _setupForm() {
        const children = [
            this.urlInputView,
            this.sizeDropdown,
            this.buttonCheckbox,
            this.saveButtonView,
            this.cancelButtonView
        ]

        this.setTemplate({
            tag: 'form',
            attributes: {
                class: ['ck', 'ck-link-form'],
                tabindex: '-1'
            },
            children
        })
    }

    public focus() {
        this.urlInputView.fieldView.element.focus()
    }

    public get size() {
        return this.sizeDropdown.value
    }

    public get isButton() {
        return this.buttonCheckbox.isOn
    }
}

function createLabeledInputText() {
    const inputView = new View()
    inputView.setTemplate({
        tag: 'input',
        attributes: {
            type: 'text',
            class: ['ck', 'ck-input', 'ck-input-text']
        }
    })
    return inputView
}