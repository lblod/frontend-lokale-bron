import { module, test } from 'qunit';
import { setupTest } from 'lokale-bron/tests/helpers';

module('Unit | Route | overview', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:overview');
    assert.ok(route);
  });
});
