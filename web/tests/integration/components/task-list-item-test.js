import { module, test } from 'qunit';
import { setupRenderingTest } from '@lbtodo/web/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | task-list-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TaskListItem />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <TaskListItem>
        template block text
      </TaskListItem>
    `);

    assert.dom().hasText('template block text');
  });
});
