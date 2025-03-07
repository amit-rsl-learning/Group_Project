import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
  async model() {
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    console.log(data);
    return data ? data : [];
  }
}
