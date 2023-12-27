import { module, test } from 'qunit';
import { setupRenderingTest } from '@lbtodo/web/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | author-list-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AuthorListItem />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <AuthorListItem>
        template block text
      </AuthorListItem>
    `);

    assert.dom().hasText('template block text');
  });
});
