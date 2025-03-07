import { module, test } from 'qunit';
import { setupRenderingTest } from 'group-project/tests/helpers';
import { click, currentURL, pauseTest, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card', function (hooks) {
  setupRenderingTest(hooks);

  test('Check card render', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    let data = {
      "login": "amit-077",
      "id": 93733587,
      "node_id": "U_kgDOBZZC0w",
      "avatar_url": "https://avatars.githubusercontent.com/u/93733587?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/amit-077",
      "html_url": "https://github.com/amit-077",
      "followers_url": "https://api.github.com/users/amit-077/followers",
      "following_url": "https://api.github.com/users/amit-077/following{/other_user}",
      "gists_url": "https://api.github.com/users/amit-077/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/amit-077/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/amit-077/subscriptions",
      "organizations_url": "https://api.github.com/users/amit-077/orgs",
      "repos_url": "https://api.github.com/users/amit-077/repos",
      "events_url": "https://api.github.com/users/amit-077/events{/privacy}",
      "received_events_url": "https://api.github.com/users/amit-077/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false,
      "name": "Amit Kamat",
      "company": null,
      "blog": "https://amitkamat.vercel.app",
      "location": "Pune 📌",
      "email": null,
      "hireable": null,
      "bio": "Web Developer | Android Developer | Blockchain Developer",
      "twitter_username": null,
      "public_repos": 96,
      "public_gists": 0,
      "followers": 4,
      "following": 1,
      "created_at": "2021-11-04T18:21:37Z",
      "updated_at": "2025-02-24T12:09:28Z"
  }

    this.set('userProfile', data)

    await render(hbs`<Card @profile={{this.userProfile}}/>`);

    assert.dom('[data-test-p="repo"]').hasText(`Repos: ${this.userProfile.public_repos}`);
    assert.dom('[data-test-p="followers"]').hasText(`Followers: ${this.userProfile.followers}`);
    assert.dom('[data-test-p="following"]').hasText(`Following: ${this.userProfile.following}`);
    assert.dom('[data-test-h2="name"]').hasText(this.userProfile.name)
    assert.dom('[data-test-p="username"]').hasText(`@${this.userProfile.login}`)
    assert.dom('[data-test-link="profile"]').hasText('GitHub Profile').hasAttribute('href', this.userProfile.html_url);
  });
});
