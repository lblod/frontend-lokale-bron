import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-lokale-bron/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | search', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Search />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Search>
        template block text
      </Search>
    `);

    assert.dom().hasText('template block text');
  });
});
