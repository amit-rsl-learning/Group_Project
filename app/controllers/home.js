import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class HomeController extends Controller {
  @tracked displayMessage = 'Search a user to begin';
  @tracked userFound = false;
  @tracked userProfile = {};

  @action
  async searchUser(e) {
    const response = await fetch(
      `https://api.github.com/users/${e.target.value}`,
    );
    const data = await response.json();
    console.log(data)
    if (response.status == 200) {
      this.userProfile = data;
      this.userFound = true;
    } else {
      this.displayMessage = 'No user found!!';
      this.userFound = false;
    }
  }
}
