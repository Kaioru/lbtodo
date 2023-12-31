import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class AuthorListComponent extends Component {
    @service store;
    @tracked authorNewName = '';

    @action
    toggleModalAuthorCreate() {
        $('#modal-create-author').modal('show');
    }

    @action
    createAuthor() {
        this.store
            .createRecord('author', {
                name: this.authorNewName
            })
            .save()
            .catch((ex) => {
                this.authorError = JSON.parse(ex.errors[0].detail).error.message;
                this.toggleModalAuthorError(author);
            });
    }
}
