import {View} from "ckeditor5";


const templateSample = () => {
    const rendererView = new View();

    rendererView.setTemplate({
        tag: 'div',
        attributes: {
            style: {
                padding: '20px',
                whiteSpace: 'initial',
                width: '100%',
                maxWidth: '500px',
                background: "red"
            },
            tabindex: -1
        },
        children: [
            'This is the content of the dialog.',
            'You can put here text, images, inputs, buttons, etc.'
        ]
    });

    return rendererView
}

export {templateSample}