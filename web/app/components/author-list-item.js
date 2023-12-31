import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AuthorListItemComponent extends Component {
  @tracked authorNewName = '';
  @tracked authorError = '';

  @action
  toggleModalAuthorEdit(author) {
    this.authorNewName = author.name;
    $('#modal-edit-author-' + author.id).modal('show');
  }

  @action
  toggleModalAuthorDelete(author) {
    $('#modal-delete-author-' + author.id).modal('show');
  }

  @action
  toggleModalAuthorError(author) {
    $('#modal-error-author-' + author.id).modal('show');
  }

  @action
  updateAuthor(author) {
    author.name = this.authorNewName;
    author.save().catch((ex) => {
      this.authorError = JSON.parse(ex.errors[0].detail).error.message;
      this.toggleModalAuthorError(author);
    });
  }

  @action
  deleteAuthor(author) {
    author.destroyRecord().catch((ex) => {
      this.authorError = JSON.parse(ex.errors[0].detail).error.message;
      this.toggleModalAuthorError(author);
    });
  }
}
