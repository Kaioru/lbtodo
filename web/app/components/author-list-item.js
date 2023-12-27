import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AuthorListItemComponent extends Component {
    @tracked authorNewName = "";

    @action
    toggleModalAuthorEdit(author) {
        $('#modal-edit-' + author.id).modal('show');
    }

    @action
    toggleModalAuthorDelete(author) {
        $('#modal-delete-' + author.id).modal('show');
    }

    @action
    updateAuthor(author) {
        author.name = this.authorNewName;
        author.save();
    }

    @action
    deleteAuthor(author) {
        author.destroyRecord();
    }
}
