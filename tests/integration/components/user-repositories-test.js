import { module, test } from "qunit";
import { setupRenderingTest } from "group-project/tests/helpers";
import { render, fillIn } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | user-repositories", function (hooks) {
	setupRenderingTest(hooks);

	test("it renders the search input and repositories", async function (assert) {
		this.set("repos", [{ name: "repo-1" }, { name: "repo-2" }, { name: "repo-3" }]);
		this.set("handleInput", () => { });

		await render(hbs`<UserRepositories @repos={{this.repos}} @handleInput={{this.handleInput}} />`);

		assert.dom("[data-test-repos-search]").exists();
		assert.dom("[data-test-repos-container]").exists();
		assert.dom("[data-test-repos-container] h2").hasText("Repositories");
		assert.dom("[data-test-repo-list]").exists({ count: 3 });
	});

	test("it filters repositories based on the search input", async function (assert) {
		this.set("repos", [{ name: "repo-1" }, { name: "repo-2" }, { name: "repo-3" }]);
		this.set("handleInput", () => {
			this.set("repos", [{ name: "repo-1" }]);
		});

		await render(hbs`<UserRepositories @repos={{this.repos}} @handleInput={{this.handleInput}} />`);
		await fillIn("[data-test-repos-search]", "repo-1");
		assert.dom("[data-test-repo-list]").exists({ count: 1 });
	});

});
