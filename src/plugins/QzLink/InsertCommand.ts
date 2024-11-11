import { Command } from 'ckeditor5';

export default class InsertCommand extends Command {
	execute( id ) {
		this.editor.model.change( writer => {
			this.editor.model.insertContent(  writer.createElement('qzLinkSchema', {
				'data-title': "New tooltip with default values",
				'data-tooltip': "This tooltip been added using the toolbar with these hardcoded values"
			}) );
		} );
	}

	refresh() {
		const model = this.editor.model;
		const selection = model.document.selection;
		const allowedIn = model.schema.findAllowedParent( selection.getFirstPosition(), 'qzLinkSchema' );

		this.isEnabled = allowedIn !== null;
	}
}
