import { module, test } from 'qunit';
import { setupRenderingTest } from 'group-project/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | navbar', function (hooks) {
  setupRenderingTest(hooks);

  test('Testing Navbar Items', async function (assert) {

    await render(hbs`<Navbar/>`)

    assert.dom().includesText('Home')
    assert.dom().includesText('About')
    assert.dom().includesText('Contact')
    assert.dom().includesText('GitHub Explorer')
  });
});
