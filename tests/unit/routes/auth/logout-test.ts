import { module, test } from 'qunit';
import { setupTest } from 'frontend-lokale-bron/tests/helpers';

module('Unit | Route | auth/logout', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:auth/logout');
    assert.ok(route);
  });
});
