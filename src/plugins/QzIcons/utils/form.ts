import {
    icons,
    type Plugin,
    Collection,
    View,
    submitHandler,
    ButtonView,
    createDropdown,
    ViewModel,
    addListToDropdown,
    type ListDropdownItemDefinition,
} from '@ckeditor-imports/index'
import PluginConf from "../PluginConf"
import styles from '../style.module.css'

export default class FormView extends View {
    public saveButtonView
    public cancelButtonView
    public heightDropdown
    public currentHeight = PluginConf.defaultHeight
    public heightValues = PluginConf.heightValues
    public colorDropdown
    public currentColor = PluginConf.defaultColor
    public colorValues = PluginConf.colorValues
    public childViews
    public currentIcon = PluginConf.defaultIcon
    public iconHidden: View
    private plugin: Plugin

    constructor(plugin: Plugin) {
        super(plugin.editor.locale)
        this.plugin = plugin

        this.iconHidden = new View(plugin.editor.locale)
        this.iconHidden.setTemplate({
            tag: 'input',
            attributes: {
                type: 'hidden',
                name: 'name',
                value: this.currentIcon
            }
        })

        // Height dropdown
        const heightDropdownView = createDropdown(plugin.editor.locale);

        heightDropdownView.buttonView.set({
            withText: true,
            label: this.heightValues[this.currentHeight],
            tooltip: true,
        });

        const items = new Collection();

        // Add height options from config
        Object.entries(PluginConf.heightValues).forEach(([value, label]) => {
            items.add({
                type: 'button',
                model: new ViewModel({
                    withText: true,
                    label,
                    value,
                })
            })
        });


        heightDropdownView.on('execute', evt => {
            const selectedItem = evt.source as { value: string }
            this.currentHeight = selectedItem.value
            heightDropdownView.buttonView.set({
                label: this.heightValues[this.currentHeight]
            })

        });

        addListToDropdown(heightDropdownView, items as Collection<ListDropdownItemDefinition>);
        this.heightDropdown = heightDropdownView

        // Color dropdown
        const colorDropdownView = createDropdown(plugin.editor.locale)

        colorDropdownView.buttonView.set({
            withText: true,
            label: this.colorValues[this.currentColor],
            tooltip: true,
        })

        const colorItems = new Collection()

        Object.entries(PluginConf.colorValues).forEach(([value, label]) => {
            colorItems.add({
                type: 'button',
                model: new ViewModel({
                    withText: true,
                    label,
                    value,
                })
            })
        })

        colorDropdownView.on('execute', evt => {
            const selectedItem = evt.source as { value: string }
            this.currentColor = selectedItem.value
            colorDropdownView.buttonView.set({
                label: this.colorValues[selectedItem.value]
            })
        })

        addListToDropdown(colorDropdownView, colorItems as Collection<ListDropdownItemDefinition>)

        this.colorDropdown = colorDropdownView

        this.saveButtonView = this._createButton('Save', icons.check, 'ck-button-save')
        this.saveButtonView.type = 'submit'

        this.cancelButtonView = this._createButton('Cancel', icons.cancel, 'ck-button-cancel')

        // Delegate ButtonView#execute to FormView#cancel
        this.cancelButtonView.delegate('execute').to(this, 'cancel')

        this.childViews = this.createCollection([
            this.heightDropdown,
            this.colorDropdown,
            this.iconHidden,
            this.saveButtonView,
            this.cancelButtonView
        ])

        this.setTemplate({
            tag: 'form',
            attributes: {
                class: [styles.ckButtonForm, 'ck'],
                tabindex: '-1'
            },
            children: this.childViews
        })
    }

    render() {
        this.currentIcon = this._extractIconNameFromMarkup(this.plugin.editor.getData())
        this.iconHidden.setTemplate({
            tag: 'input',
            attributes: {
                type: 'hidden',
                name: 'name',
                value: this.currentIcon
            }
        })
        super.render()
        // Submit the form when the user clicked the save button or pressed enter in the input.
        submitHandler({
            view: this
        })
    }

    focus() {

    }

    _createButton(label, icon, className) {
        const button = new ButtonView()

        button.set({
            label,
            icon,
            tooltip: true,
            class: className
        })

        return button
    }

    _extractIconNameFromMarkup(markup: string): string {
        const iconNameMatch = markup.match(/name="([^"]+)"/);
        return iconNameMatch ? iconNameMatch[1] : 'mail'; // Default to 'mail' if not found
    }
}

