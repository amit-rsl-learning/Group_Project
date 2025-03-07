import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class UserProfile extends Component {
	@tracked searchQuery = "";
	@tracked repositories;

	@action
	handleInput(repos, event) {
		this.searchQuery = event.target.value.toLowerCase();
		if (this.searchQuery.length === 0) this.repositories = repos;
		else this.repositories = repos.filter((repo) => repo.name.toLowerCase().includes(this.searchQuery));
	}
}
