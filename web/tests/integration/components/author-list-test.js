import { module, test } from 'qunit';
import { setupRenderingTest } from '@lbtodo/web/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | author-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AuthorList />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <AuthorList>
        template block text
      </AuthorList>
    `);

    assert.dom().hasText('template block text');
  });
});
