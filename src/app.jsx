// Imports necessary to run a React application.
import { useState } from 'react';
// The official <CKEditor> component for React.
import { CKEditor } from '@ckeditor/ckeditor5-react';
// The base editor class and features required to run the editor.
import {
	ClassicEditor,
	Bold,
	Italic,
	Underline,
	Essentials,
	Heading,
	Link,
	Paragraph,
	Table,
	TableToolbar
} from 'ckeditor5';
// The official CKEditor 5 instance inspector. It helps understand the editor view and model.
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import TooltipPlugin from './ckeditor/TooltipPlugin.ts';
import 'ckeditor5/ckeditor5.css';
import './styles.css';

export default function App( props ) {
	// A place to store the reference to the editor instance created by the <CKEditor> component.
	// The editor instance is created asynchronously and is only available when the editor is ready.
	const [ editorRef, setEditorRef ] = useState( null );
	// The initial editor data. It is bound to the editor instance and will change as
	// the user types and modifies the content of the editor.
	const [ editorData, setEditorData ] = useState( `<h2>Check our last minute deals!</h2>

	<p>
		Aenean erat conubia pretium libero habitant turpis vivamus dignissim molestie, phasellus libero!
		Curae; consequat cubilia mattis. Litora non iaculis tincidunt.
	</p>
	<x-tooltip title="asdasd" data-title="Something" data-tooltip="The tooptip text"></x-tooltip>
	<p>
		Aenean erat conubia pretium libero habitant turpis vivamus dignissim molestie, phasellus libero!
		Curae; consequat cubilia mattis. Litora non iaculis tincidunt.
	</p>
	<x-tooltip data-title="Foo" data-tooltip="mas copsas"></x-tooltip>
	<p>
		Aenean erat conubia pretium libero habitant turpis vivamus dignissim molestie, phasellus libero!
		Curae; consequat cubilia mattis. Litora non iaculis tincidunt.
	</p>

	` );

	return (
		// The application renders two columns:
		// * in the left one, the <CKEditor> and the textarea displaying live
		//   editor data are rendered.
		//   to choose from.
		<div ref={ setEditorRef } className='app'>
			{ editorRef && <>
				<div className='app__offer-editor' key='offer-editor'>
					<CKEditor
						editor={ ClassicEditor }
						// The configuration of the <CKEditor> instance.
						config={ {
							plugins: [
								// A set of editor features to be enabled and made available to the user.
								Essentials, Heading, Bold, Italic, Underline,
								Link, Paragraph, Table, TableToolbar,
								// Your custom plugin implementing the widget is loaded here.
								TooltipPlugin
							],
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
								'|','|',
								'heading',
								'|',
								'bold',
								'|',
								'link', 'insertTable',
								'|',
								'undo', 'redo',
								'|',

							],
							table: {
								contentToolbar: [
									'tableColumn',
									'tableRow',
									'mergeTableCells'
								]
							},

						} }
						data={ editorData }
					/>
				</div>
			</> }
		</div>
	);
}
