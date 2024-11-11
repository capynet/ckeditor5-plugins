import {ClassicEditor, Essentials, Paragraph, ContextualBalloon} from 'ckeditor5';
import Tooltip from "./plugins/Tooltip/Tooltip";

ClassicEditor
    .create(document.querySelector('#editor'), {
        plugins: [Essentials, Paragraph, Tooltip, ContextualBalloon],
        toolbar: [
            'btnJustAddComp',
            '|',
            'btnBalloon',
            '|',
            'btnModal',
            '|',
            'btnDropdownList',
            '|',
            'btnDropdownToolbar',
            '|',
            'btnDropdownMenu',
        ]
    })
