import {ClassicEditor, Essentials, Paragraph, ContextualBalloon} from 'ckeditor5';
import QzLink from "./plugins/QzLink/Plugin";

ClassicEditor
    .create(document.querySelector('#editor'), {
        plugins: [Essentials, Paragraph, QzLink, ContextualBalloon],
        toolbar: [
            'btnBalloon',
        ]
    })
