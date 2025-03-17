import {type Plugin, createDropdown, ButtonView, addToolbarToDropdown} from '@ckeditor-imports/index'
import pluginIcon from '../assets/plugin-button.svg?raw'
import PluginConf from "../PluginConf"
import styles from '../style.module.css'

// @ts-ignore
const icons = import.meta.glob('../assets/icons/*.svg', {
    eager: true,
    query: '?raw',
    import: 'default'
})

const iconSet = Object.entries(icons).reduce((acc, [path, content]) => {
    const name = path.split('/').pop().replace('.svg', '')
    acc[name] = content
    return acc
}, {})


const _showUIDropdownToolbarIcons = (plugin: Plugin) => {
    const buttons = []

    Object.entries(iconSet).forEach(([iconName, iconContent]) => {
        const btn = new ButtonView(plugin.editor.locale)

        btn.set({
            label: plugin.editor.t(iconName),
            tooltip: true,
            icon: iconContent,
        })

        btn.iconView.setTemplate({
            tag: 'svg',
            ns: 'http://www.w3.org/2000/svg',
            attributes: {
                fill: "currentColor",
                class: ['ck-reset_all-excluded', 'qz-icon-sample'],
                viewBox: btn.iconView.bindTemplate.to('viewBox')
            }
        })

        plugin.listenTo(btn, 'execute', () => {
            const value = {
                name: iconName,
                height: '24',
                color: 'black'
            }
            plugin.editor.execute(PluginConf.commandName, value as any)
        })

        buttons.push(btn)

    })


    const dropdownView = createDropdown(plugin.editor.locale)

    dropdownView.buttonView.set({
        withText: false,
        label: 'Icons',
        icon: pluginIcon,
        tooltip: true,
        class: styles.toolbarIcon
    })


    addToolbarToDropdown(dropdownView, buttons)

    return dropdownView
}

export default _showUIDropdownToolbarIcons
