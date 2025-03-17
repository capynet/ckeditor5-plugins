/**
 * This is the entrypoint of the development preview file index.html
 */
import {ClassicEditor, Heading, Essentials, Paragraph, ContextualBalloon, Bold, Alignment, SourceEditing} from 'ckeditor5';
import QzLink from "./plugins/QzLink/Plugin";
import QzIcons from "./plugins/QzIcons/Plugin";
import QzTooltip from "./plugins/QzTooltip/Plugin";
import EnhancedLink from "./plugins/enhancedLink/enhancedLink";

ClassicEditor
    .create(document.querySelector('#editor') as HTMLElement, {
        plugins: [
            // Our plugins:
            QzLink, QzTooltip, QzIcons,EnhancedLink,
            // Ckeditor extra tools.
            Essentials, Heading, Paragraph, ContextualBalloon, Bold, Alignment, SourceEditing],
        toolbar: [
            'btnQzLink',
            'btnQzIcons',
            'btnQzTooltip',
            '|',
            'heading', 'bold', 'alignment', 'sourceediting', 'enhancedLink'
        ],
        heading: {
            options: [
                {
                    model: 'paragraph',
                    title: 'Paragraph',
                    class: 'ck-heading_paragraph'
                },
                {
                    model: 'heading2',
                    view: 'h2',
                    title: 'Heading 2',
                    class: 'ck-heading_heading2'
                },
                {
                    model: 'heading3',
                    view: 'h3',
                    title: 'Heading 3',
                    class: 'ck-heading_heading3'
                },
            ]
        },
    })
