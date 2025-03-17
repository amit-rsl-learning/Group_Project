import { module, test } from "qunit";
import { setupRenderingTest } from "group-project/tests/helpers";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | profile", function (hooks) {
	setupRenderingTest(hooks);

	test("it renders profile data correctly", async function (assert) {
		this.set("profile", {
			avatar_url: "https://example.com/avatar.jpg",
			name: "Test User",
			location: "Test City",
			followers: 100,
			following: 50,
			public_repos: 10,
			html_url: "https://github.com/testuser",
		});

		await render(hbs`<Profile @profile={{this.profile}} />`);

		assert.dom(".profile-header img").hasAttribute("src", "https://example.com/avatar.jpg");
		assert.dom("[data-test-profile-name]").hasText("Test User");
		assert.dom("[data-test-location]").hasText("Test City");
		assert.dom("[data-test-followers]").hasText("100");
		assert.dom("[data-test-following]").hasText("50");
		assert.dom("[data-test-repos]").hasText("10");
		assert.dom("a").hasAttribute("href", "https://github.com/testuser");
	});

	test('it displays "Location: Unknown" when location is missing', async function (assert) {
		this.set("profile", {
			avatar_url: "https://example.com/avatar.jpg",
			name: "Test User",
			location: null,
			followers: 100,
			following: 50,
			public_repos: 10,
			html_url: "https://github.com/testuser",
		});

		await render(hbs`<Profile @profile={{this.profile}} />`);

		assert.dom("[data-test-location]").hasText("Location:Unknown");
	});
});
