import api from './api';
import './styles.css';

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
            <li>LOGO</li>
            <li>Filmes</li>
            <li>Séries</li>
            <li>Favoritos</li>
          </ul>
          <ul class='icons-container'>
            <li>X</li>
            <li>O</li>
            <li>P</li>
          </ul>
        </header>
      </div>

    `;

    return app;
  }
}

const app = new App();