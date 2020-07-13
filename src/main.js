/* eslint-disable semi */
/* eslint-disable camelcase */
import api, { API_KEY } from './api';
import './styles.css';
import notificationsImg from './assets/notification.svg';
import logoImg from './assets/logo.svg';
import searchImg from './assets/search.svg';
import profileImg from './assets/profile.svg';
import favoriteImg from './assets/favorite.svg';
import favoriteActive from './assets/favorite-active.svg';
class App {
  constructor () {
    this.favoritos = JSON.parse(localStorage.getItem('filmes')) || [];
    this.setPopularData();
    this.setRecentData();
    this.movies = [];
    this.now_playing = [];
    this.appElement = document.getElementById('app');
    this.appElement.innerHTML = this.render();
    this.ready();
    this.eventListener();
  }

  renderPopular (data) {
    const mainEl = document.querySelector('.main-movie');
    mainEl.innerHTML = /* html */ `<img src="https://image.tmdb.org/t/p/w780/${data[0].backdrop_path}"/>`;
    const secEl = document.querySelector('.secondary-movies');
    secEl.innerHTML = /* html */ `
    <img src="https://image.tmdb.org/t/p/w300/${data[1].backdrop_path}"/>
    <img src="https://image.tmdb.org/t/p/w300/${data[2].backdrop_path}"/>`;

    mainEl.innerHTML += /* html */ `
      <div class="info">
        <h4>${data[0].title}</h4>
        <p>${data[0].overview}</p>
      </div>`;
  }

  async getData (category) {
    let data = [];
    try {
      data = await api.get(
        `/movie/${category}?api_key=${API_KEY}&language=pt-BR&page=1&region=BR`
      );
    } catch (err) {
      console.log('Error on request ', err);
    }
    return data.data.results || [];
  }

  async setRecentData () {
    this.now_playing = await this.getData('now_playing');
  }

  async setPopularData () {
    this.movies = await this.getData('popular');
  }

  fetchData (data, query) {
    let html = '';
    data.forEach((filme) => {
      let favorito = false;
      const { poster_path } = filme;
      if (this.favoritos.indexOf(`https://image.tmdb.org/t/p/w300/${poster_path}`) !== -1) {
        favorito = true;
      }
      if (poster_path !== null) {
        html += this.renderMovies(poster_path, favorito);
      }
    });
    const elementAux = document.querySelector(query);
    elementAux.innerHTML = html;
  }

  renderMovies (poster_path, favorito) {
    return /* html */ `
        <span key=${poster_path}>
        <img class="favorite"src=${favorito ? favoriteActive : favoriteImg} />
        <img class="poster" src="https://image.tmdb.org/t/p/w300/${poster_path}"/>
        </span>
        `;
  }

  ready () {
    document.addEventListener('readystatechange', (event) => {
      if (document.readyState === 'complete') {
        this.fetchData(this.movies, '.popular > .movies');
        this.fetchData(this.now_playing, '.recent > .movies');
        this.renderFav();
        this.renderPopular(this.movies);
      }
    });
  }

  renderFav () {
    const fav = this.favoritos;
    const favElement = document.querySelector('.favorites > .movies');
    if (fav.length > 0) {
      favElement.innerHTML = '';
      fav.forEach((filme) => {
        favElement.innerHTML += /* html */ `
              <span key="${filme}">
                <img class="favorite" src=${favoriteActive} />
                <img class="poster" src="${filme}"}/>
              </span>`;
      });
    } else {
      favElement.innerHTML = /* html */ `
            <h5 class='nenhum'>Nenhum filme adicionado aos favoritos</h5>`;
    }
    this.saveToStorage();
  }

  onclick (filme) {
    const posterFilme = filme.target.src.includes('.svg')
      ? filme.srcElement.nextElementSibling.currentSrc
      : filme.target.src;
    const favoritos = this.favoritos;
    if (!(favoritos.indexOf(posterFilme) !== -1)) {
      favoritos.push(posterFilme);
    } else {
      favoritos.splice([favoritos.indexOf(posterFilme)], 1);
    }
    this.favoritos = favoritos;
    this.fetchData(this.movies, '.popular > .movies');
    this.fetchData(this.now_playing, '.recent > .movies');
    this.renderFav();
  }

  eventListener () {
    const filmes = document.querySelectorAll('.movies');
    filmes.forEach((filme) => {
      filme.addEventListener('click', (filme) => {
        this.onclick(filme);
      });
    });
  }

  saveToStorage () {
    localStorage.setItem('filmes', JSON.stringify(this.favoritos));
  }

  render () {
    const app = /* html */ `
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
        <div class="recent-container"> 
          <article class="main-movie">
            <div class="info">
            </div>
          </article>
          <article class="secondary-movies">
          </article>
        </div>
        <div class="popular">
          <h2>Populares</h2>
          <div class="movies">
          </div>
        </div>
        <div class="recent">
          <h2>Em exibição</h2>
          <div class="movies">
          </div>
        </div>
        <div class="favorites">
          <h2>Favoritos</h2>
          <div class="movies">
          </div>
        </div>
        
     </div>

    `;
    return app;
  }
}
// eslint-disable-next-line no-unused-vars
const app = new App();
