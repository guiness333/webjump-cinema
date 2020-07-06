import api from './api';
import './styles.css';
import notificationsImg from './assets/notification.svg';
import logoImg from './assets/logo.svg';
import searchImg from './assets/search.svg';
import profileImg from './assets/profile.svg';
import favoriteImg from './assets/favorite.svg';
import favoriteActive from './assets/favorite-active.svg';
const API_KEY = '4eb0f1abd8808fce853779d359d25c07';
class App {
  constructor() {
    this.favoritos = JSON.parse(localStorage.getItem('filmes')) || [];
    this.setPopularData();
    this.setRecentData();
    this.movies = [];
    this.now_playing = [];
    this.appElement = document.getElementById('app');
    this.appElement.innerHTML = this.render();

    this.eventListener(true);

  }
  async setPopularData() {
    let data = await api.get(`/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1&region=BR`);
    this.movies = data.data.results;

    let mainEl = document.querySelector('.main-movie');
    mainEl.innerHTML = /*html*/`<img src="https://image.tmdb.org/t/p/w780/${this.movies[0].backdrop_path}"/>`
    let secEl = document.querySelector('.secondary-movies');
    secEl.innerHTML = /*html*/`
    <img src="https://image.tmdb.org/t/p/w300/${this.movies[1].backdrop_path}"/>
    <img src="https://image.tmdb.org/t/p/w300/${this.movies[2].backdrop_path}"/>`

    mainEl.innerHTML += /*html*/`
      <div class="info">
        <h4>${this.movies[0].title}</h4>
        <p>${this.movies[0].overview}</p>
      </div>`



  }
  async setRecentData() {
    let data = await api.get(`/movie/now_playing?api_key=${API_KEY}&language=pt-BR&page=1&region=BR`);
    this.now_playing = data.data.results;
  }

  fetchData() {
    let html = '';
    //Filmes populares
    this.movies.forEach(filme => {
      let { poster_path, backdrop_path, overview, title } = filme;
      let favorito = false
      let res = []
      this.favoritos.forEach(filme => {
        res.push(filme.poster);
      })
      let index = res.indexOf((`https://image.tmdb.org/t/p/w300/${poster_path}`));
      if (res.indexOf((`https://image.tmdb.org/t/p/w300/${poster_path}`)) != -1 && this.favoritos[index].active) {
        favorito = true;
      }
      html += this.renderMovies(poster_path, favorito);
    })
    let filmesEl = document.querySelector('.popular > .movies');
    filmesEl.innerHTML = html;

    //Filmes Recentes
    html = '';
    this.now_playing.forEach(filme => {
      let { poster_path, backdrop_path, overview, title } = filme;
      let favorito = false
      let res = []
      this.favoritos.forEach(filme => {
        res.push(filme.poster);
      })
      let index = res.indexOf((`https://image.tmdb.org/t/p/w300/${poster_path}`));
      if (res.indexOf((`https://image.tmdb.org/t/p/w300/${poster_path}`)) != -1 && this.favoritos[index].active) {
        favorito = true;
      }
      html += this.renderMovies(poster_path, favorito);
    })
    let recentEl = document.querySelector('.recent > .movies');
    console.log(recentEl);
    recentEl.innerHTML = html;


  }



  renderMovies(poster_path, favorito) {
    return /*html*/`
          <span key=${poster_path}>
          <img class="favorite"src=${favorito ? favoriteActive : favoriteImg} />

          <img class="poster" src="https://image.tmdb.org/t/p/w300/${poster_path}"/>
          </span>
          `
  }
  ready() {
    document.addEventListener('readystatechange', (event) => {
      if (document.readyState == 'complete') {
        this.fetchData();
        this.renderFav();
      }
    })
  }

  renderFav() {
    let img = [];
    console.log(this.favoritos);
    let fav = this.favoritos;
    let favElement = document.querySelector('.favorites > .movies');
    if (fav.length > 0) {
      fav.forEach(favorito => {
        if (favorito.active) {
          img.push(favorito.poster);
        }
      });
      console.log(img);
      if (img.length > 0) {

        favElement.innerHTML = '';
        img.forEach(filme => {
          favElement.innerHTML += /*html*/`
              <span key="${filme}">
                <img class="favorite" src=${favoriteActive} />
                <img class="poster" src="${filme}"}/>
              </span>`

        })


      } else {
        favElement.innerHTML = /*html*/`
            <h5 class='nenhum'>Nenhum filme adicionado aos favoritos</h5>`
      }

    } else {
      favElement.innerHTML = /*html*/`
            <h5 class='nenhum'>Nenhum filme adicionado aos favoritos</h5>`
    }
    this.favoritos = fav;
    this.saveToStorage();
  }
  onclick(filme) {
    let posterFilme = filme.target.src.includes('.svg') ? filme.srcElement.nextElementSibling.currentSrc : filme.target.src;

    let favoritos = this.favoritos;
    let aux = [];
    favoritos.forEach(fav => {
      aux.push(fav.poster);
    })
    if (!(aux.indexOf(posterFilme) != -1)) {
      favoritos = [...favoritos, { active: true, poster: posterFilme }];
    } else {
      favoritos[aux.indexOf(posterFilme)] = { active: !favoritos[aux.indexOf(posterFilme)].active, poster: posterFilme };
    }
    console.log(filme);
    this.favoritos = favoritos;
    this.fetchData();
    this.renderFav();
  }

  eventListener() {
    let filmes = document.querySelectorAll('.movies');
    filmes.forEach(filme => {
      filme.addEventListener('click', (filme) => {
        this.onclick(filme);
      })
    })
  }
  saveToStorage() {
    localStorage.setItem('filmes', JSON.stringify(this.favoritos));
  }


  render() {

    //this.popularMovies();



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
          ${this.ready() || ''}
          </div>
        </div>
        
     </div>

    `;

    return app;
  }
}
const app = new App();

