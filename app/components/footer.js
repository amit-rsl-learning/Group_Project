import Component from '@glimmer/component';

export default class Footer extends Component {
    get getCurrentYear(){
        let date = new Date().getFullYear();
        return date
    }
}
