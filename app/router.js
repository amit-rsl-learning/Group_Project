import EmberRouter from "@ember/routing/router";
import config from "group-project/config/environment";

export default class Router extends EmberRouter {
	location = config.locationType;
	rootURL = config.rootURL;
}

Router.map(function () {
	this.route("users", { path: "/users/:username" });
});
