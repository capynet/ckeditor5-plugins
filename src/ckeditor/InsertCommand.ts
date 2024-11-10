import { Command } from 'ckeditor5';

export default class InsertCommand extends Command {
	execute( id ) {
		this.editor.model.change( writer => {
			this.editor.model.insertContent(  writer.createElement('tooltipSchema', {
				'data-title': "creado desde toolbar",
				'data-tooltip': "milanesas"
			}) );
		} );
	}

	refresh() {
		const model = this.editor.model;
		const selection = model.document.selection;
		const allowedIn = model.schema.findAllowedParent( selection.getFirstPosition(), 'tooltipSchema' );

		this.isEnabled = allowedIn !== null;
	}
}
