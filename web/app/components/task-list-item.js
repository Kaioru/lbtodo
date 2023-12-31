import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TaskListItemComponent extends Component {
  @tracked taskError = '';

  @action
  toggleModalTaskDelete(task) {
    $('#modal-delete-task-' + task.id).modal('show');
  }

  @action
  toggleModalTaskError(task) {
    $('#modal-error-task-' + task.id).modal('show');
  }

  @action
  deleteTask(task) {
    task.destroyRecord().catch((ex) => {
      this.taskError = JSON.parse(ex.errors[0].detail).error.message;
      this.toggleModalTaskError(task);
    });
  }
}
