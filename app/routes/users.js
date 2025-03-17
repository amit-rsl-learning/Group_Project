import Route from "@ember/routing/route";

export default class UsersRoute extends Route {
	formatUpdatedDate(updatedAt) {
		const date = new Date(updatedAt);
		return `${date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		})}`;
	}

	async model(params) {
		console.log(params);
		let profile = {},
			repositories = [];
		const res = await fetch(`https://api.github.com/users/${params.username}`);
		profile = await res.json();
		const response = await fetch(`https://api.github.com/users/${params.username}/repos`);
		repositories = await response.json();
		repositories = repositories.map((repo) => {
			return {
				...repo,
				updated_at: this.formatUpdatedDate(repo.updated_at),
			};
		});
		// repositories = await response.json();

		const data = {
			profile,
			repositories,
		};

		console.log(data);
		return data;
	}
}
