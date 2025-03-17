import {type Plugin, ButtonView} from '@ckeditor-imports/index'
import QzContextualBalloon from "./QzContextualBalloon"
import FormView from "./form"
import pluginIcon from '../assets/plugin-icon.svg?raw'
import styles from '../style.module.css'

const addToolbarTool = (plugin: Plugin) => {
    const editor = plugin.editor
    const t = editor.t

    const formView = new FormView(plugin)

    editor.ui.componentFactory.add('btnQzTooltip', locale => {
        const btn = new ButtonView(locale)
        btn.set({label: t('Tooltip'), icon: pluginIcon, tooltip: true, class: styles.toolbarIcon})

        plugin.listenTo(btn, 'execute', () => {
            const balloon = new QzContextualBalloon(plugin)
            balloon.showUIBalloon()
        })

        return btn
    })

}

export {addToolbarTool}
