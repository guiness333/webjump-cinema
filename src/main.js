import api from './api';
import './styles.css';
import notificationsImg from './assets/notification.svg';
import logoImg from './assets/logo.svg';
import searchImg from './assets/search.svg';
import profileImg from './assets/profile.svg';

class App {
  constructor() {
    this.appElement = document.getElementById('app');
    this.appElement.innerHTML =  this.render();
  }

  render() {
    const app = /*html*/`

      <div class='container'>
        <header>
          <ul class='menu-container'>
            <li><img src=${logoImg} /></li>
            <li>Filmes</li>
            <li>Séries</li>
            <li>Favoritos</li>
          </ul>
          <ul class='icons-container'>
            <li><img src=${searchImg} /></li>
            <li><img src=${notificationsImg} /></li>
            <li><img src=${profileImg} /></li>
          </ul>
        </header>
      </div>

    `;

    return app;
  }
}

const app = new App();