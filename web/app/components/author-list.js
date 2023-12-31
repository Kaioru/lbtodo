import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class AuthorListComponent extends Component {
  @service store;
  @tracked authorError = '';
  @tracked authorNewName = '';

  @action
  toggleModalAuthorError() {
    $('#modal-error-author').modal('show');
  }

  @action
  toggleModalAuthorCreate() {
    $('#modal-create-author').modal('show');
  }

  @action
  createAuthor() {
    this.store
      .createRecord('author', {
        name: this.authorNewName,
      })
      .save()
      .catch((ex) => {
        this.authorError = ex;
        this.toggleModalAuthorError();
      });
  }
}
