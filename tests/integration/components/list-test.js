import { module, test } from 'qunit';
import { setupRenderingTest } from 'group-project/tests/helpers';
import { pauseTest, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | list', function (hooks) {
  setupRenderingTest(hooks);

  test('Check list render', async function (assert) {
    let dummyUser = {
      "login": "mojombo",
      "id": 1,
      "node_id": "MDQ6VXNlcjE=",
      "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mojombo",
      "html_url": "https://github.com/mojombo",
      "followers_url": "https://api.github.com/users/mojombo/followers",
      "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
      "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
      "organizations_url": "https://api.github.com/users/mojombo/orgs",
      "repos_url": "https://api.github.com/users/mojombo/repos",
      "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mojombo/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false
  }

  this.set('user', dummyUser)

    await render(hbs`<List @user={{this.user}}/>`);
    
    assert.dom('[data-test-list="avatar"]').exists().hasAttribute('src', this.user.avatar_url)
    assert.dom('[data-test-list="username"]').exists().hasText(this.user.login)
    assert.dom('[data-test-list="profileLink"]').exists().hasAttribute('href', this.user.html_url).hasText('Visit Profile')
  });
});
