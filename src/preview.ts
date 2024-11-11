import {
    ClassicEditor,
    Essentials,
    Paragraph,
    Bold,
    Italic,
    Font,
    ContextualBalloon
} from 'ckeditor5';

import Tooltip from "./plugins/Tooltip/Tooltip";

ClassicEditor
    .create(document.querySelector('#editor'), {
        plugins: [Essentials, Paragraph, Bold, Italic, Font, Tooltip, ContextualBalloon],
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
            '|', '|',

            'undo', 'redo', '|', 'bold', 'italic', '|',
            'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor'
        ],
        htmlSupport: {
            allow: [
                {
                    name: /^[a-zA-Z0-9-]+$/,
                    attributes: true,
                    classes: true,
                    styles: true
                }
            ]
        }
    })
