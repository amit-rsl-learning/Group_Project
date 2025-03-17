import { module, test } from 'qunit';
import { setupRenderingTest } from 'group-project/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | footer', function (hooks) {
  setupRenderingTest(hooks);

  test('Check footer year', async function (assert) {
    await render(hbs`<Footer />`);
    let year = new Date().getFullYear() 
    assert.dom().includesText(year)
  });
});
