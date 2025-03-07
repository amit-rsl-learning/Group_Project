import { module, test } from "qunit";
import { setupRenderingTest } from "group-project/tests/helpers";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | respo-list", function (hooks) {
	setupRenderingTest(hooks);

	test("it renders all badges when license, language, and updated_at are present", async function (assert) {
		this.set("repo", {
			name: "Test Repo",
			html_url: "https://github.com/test/test-repo",
			updated_at: "2025-03-07",
			license: { name: "MIT" },
			language: "JavaScript",
		});

		await render(hbs`<RepoList @repo={{this.repo}} />`);

		assert.dom("[data-test-license]").includesText("MIT");
		assert.dom("[data-test-updated-date]").includesText("Updated:2025-03-07");
		assert.dom("[data-test-language]").includesText("JavaScript");
	});

	test("it does not render a language badge when language is not present", async function (assert) {
		this.set("repo", {
			name: "Test Repo",
			html_url: "https://github.com/test/test-repo",
			updated_at: "2025-03-07",
		});

		await render(hbs`<RepoList @repo={{this.repo}} />`);

		assert.dom("[data-test-langauge]").doesNotExist();
	});

	test("it does not render a license badge when license is not present", async function (assert) {
		this.set("repo", {
			name: "Test Repo",
			html_url: "https://github.com/test/test-repo",
			updated_at: "2025-03-07",
		});

		await render(hbs`<RepoList @repo={{this.repo}} />`);

		assert.dom("[data-test-license]").doesNotExist();
	});
});
