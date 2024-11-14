import { module, test } from 'qunit';
import { setupTest } from 'frontend-lokale-bron/tests/helpers';

module('Unit | Service | application', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:application');
    assert.ok(service);
  });
});
