import {type Plugin, ButtonView} from '@ckeditor-imports/index'
import QzContextualBalloon from "./QzContextualBalloon"
import pluginIcon from '../assets/plugin-button.svg?raw'
import styles from '../style.module.css'

const addToolbarTool = (plugin: Plugin) => {
    const editor = plugin.editor
    const t = editor.t

    editor.ui.componentFactory.add('btnQzLink', locale => {
        const btn = new ButtonView(locale)
        btn.set({label: t('Insert a link'), icon: pluginIcon, tooltip: true, class: styles.toolbarIcon})

        plugin.listenTo(btn, 'execute', () => {
            const balloon = new QzContextualBalloon(plugin)
            balloon.showUIBalloon()
        })

        return btn
    })

}

export {addToolbarTool}
