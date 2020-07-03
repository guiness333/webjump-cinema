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
    <div class="banner">
      <div class='container'>
        
          <header>
            <ul class='menu-container'>
              <li><a href="/"><img src=${logoImg} /></a></li>
              <li><a href="#filmes">Filmes</a></li>
              <li><a href="#series">Séries</a></li>
              <li><a href="#favoritos">Favoritos</a></li>
            </ul>
            <ul class='icons-container'>
              <li><img src=${searchImg} /></li>
              <li><img src=${notificationsImg} /></li>
              <li><img src=${profileImg} /></li>
            </ul>
          </header>
        </div>
     </div>

    `;

    return app;
  }
}

const app = new App();