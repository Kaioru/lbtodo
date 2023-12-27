import Model, { attr, belongsTo } from '@ember-data/model';
import { service } from '@ember/service';

export default class TaskModel extends Model {
  @service store;

  @attr('string') title;
  @attr('string') description;
  @attr('string') status;
  @attr('date') dueDate;
  @belongsTo('author', {
    async: true,
    inverse: null,
  })
  authorid;
}
