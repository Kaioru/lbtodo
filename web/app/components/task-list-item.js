import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class TaskListItemComponent extends Component {
    @service store;
    @tracked taskError = '';
    @tracked taskNewTitle;
    @tracked taskNewDescription;
    @tracked taskNewDueDate;
    @tracked taskNewAuthorId;

    @action
    toggleModalTaskComplete(task) {
        $('#modal-complete-task-' + task.id).modal('show');
    }

    @action
    toggleModalTaskEdit(task) {
        this.taskNewTitle = task.title;
        this.taskNewDescription = task.description;
        $('#modal-edit-task-' + task.id).modal('show');
    }

    @action
    toggleModalTaskDelete(task) {
        $('#modal-delete-task-' + task.id).modal('show');
    }

    @action
    toggleModalTaskError(task) {
        $('#modal-error-task-' + task.id).modal('show');
    }

    @action
    setTaskAuthorId(id) {
        this.taskNewAuthorId = id;
    }

    @action
    completeTask(task) {
        task.status = "completed";
        task.save().catch((ex) => {
            this.taskError = JSON.parse(ex.errors[0].detail).error.message;
            this.toggleModalTaskError(task);
        });
    }

    @action
    deleteTask(task) {
        task.destroyRecord().catch((ex) => {
            this.taskError = JSON.parse(ex.errors[0].detail).error.message;
            this.toggleModalTaskError(task);
        });
    }

    @action
    async updateTask(task) {
        if (this.taskNewTitle === "" || this.taskNewDescription === "") {
            this.taskError = "Title and description cannot be empty!";
            this.toggleModalTaskError(task);
            return;
        }

        try {
            task.title = this.taskNewTitle;
            task.description = this.taskNewDescription;
            task.dueDate = new Date(this.taskNewDueDate);
            task.authorid = await this.store.findRecord('author', this.taskNewAuthorId);
            task.save()
                .catch((ex) => {
                    this.taskError = ex;
                    this.toggleModalTaskError(task);
                });
        } catch (ex2) {
            this.taskError = ex2;
            this.toggleModalTaskError(task);
        }
    }
}
