import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class TasksRoute extends Route {
  @service store;

  async model() {
    return {
      tasks: await this.store.findAll('task', {
        include: 'author',
      }),
      authors: await this.store.findAll('author'),
    };
  }
}
