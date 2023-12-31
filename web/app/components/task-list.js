import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class TaskListComponent extends Component {
    @service store;
    @tracked taskError = '';
    @tracked taskNewTitle;
    @tracked taskNewDescription;
    @tracked taskNewDueDate;
    @tracked taskNewAuthorId;

    @action
    toggleModalTaskError() {
        $('#modal-error-task').modal('show');
    }

    @action
    toggleModalTaskCreate() {
        $('#modal-create-task').modal('show');
    }

    @action
    setTaskAuthorId(id) {
        this.taskNewAuthorId = id;
    }

    @action
    async createTask() {
        if (this.taskNewTitle === "" || this.taskNewDescription === "") {
            this.taskError = "Title and description cannot be empty!";
            this.toggleModalTaskError();
            return;
        }

        try {
        this.store
            .createRecord('task', {
                title: this.taskNewTitle,
                description: this.taskNewDescription,
                status: 'pending',
                dueDate: new Date(this.taskNewDueDate),
                authorid: await this.store.findRecord('author', this.taskNewAuthorId)
            })
            .save()
            .catch((ex) => {
                this.taskError = ex;
                this.toggleModalTaskError();
            });
        } catch (ex2) {
            this.taskError = ex2;
            this.toggleModalTaskError();
        }
    }
}
