import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-lokale-bron/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | app-cards', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AppCards />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <AppCards>
        template block text
      </AppCards>
    `);

    assert.dom().hasText('template block text');
  });
});
