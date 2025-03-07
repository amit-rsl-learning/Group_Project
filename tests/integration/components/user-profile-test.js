import { module, test } from "qunit";
import { setupRenderingTest } from "group-project/tests/helpers";
import { render, fillIn } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | user-profile", function (hooks) {
	setupRenderingTest(hooks);

	test("it renders the profile and user repositories", async function (assert) {
		this.set("profile", { name: "test-user", location: "Nashik", followers: 10, following: 10, public_repos: 10 });
		this.set("repos", [{ name: "repo-1" }, { name: "repo-2" }, { name: "repo-3" }]);

		await render(hbs`<UserProfile @profile={{this.profile}} @repos={{this.repos}} />`);

		assert.dom("[data-test-profile]").exists();
		assert.dom("[data-test-profile-name]").containsText("test-user");

		assert.dom("[data-test-followers]").includesText("10");
		assert.dom("[data-test-following]").includesText("10");
		assert.dom("[data-test-repos]").includesText("10");
		assert.dom("[data-test-repo-list]").exists({ count: 3 }, "all the repositories are rendered");

		await fillIn("input", "repo-1");

		assert.dom("[data-test-repo-list]").exists({ count: 1 }, "searching repo works");
	});
});
