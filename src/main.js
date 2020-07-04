import api from './api';
import './styles.css';
import notificationsImg from './assets/notification.svg';
import logoImg from './assets/logo.svg';
import searchImg from './assets/search.svg';
import profileImg from './assets/profile.svg';
import favoriteImg from './assets/favorite.svg';
import favoreteActive from './assets/favorite-active.svg';
class App {
  constructor() {
    this.popular = [];
    this.favorites = [];
    this.movies = [
      {
        "popularity": 147.532,
        "vote_count": 3833,
        "video": false,
        "poster_path": "/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg",
        "id": 419704,
        "adult": false,
        "backdrop_path": "/t4z8OlOEzH7J1JRFUN3rcm6XHNL.jpg",
        "original_language": "en",
        "original_title": "Ad Astra",
        "genre_ids": [
          18,
          878
        ],
        "title": "Ad Astra - Rumo às Estrelas",
        "vote_average": 6.1,
        "overview": "Roy McBride é um engenheiro espacial, portador de um leve grau de autismo, que decide empreender a maior jornada de sua vida: viajar para o espaço, cruzar a galáxia e tentar descobrir o que aconteceu com seu pai, um astronauta que se perdeu há vinte anos atrás no caminho para Netuno.",
        "release_date": "2019-09-26"
      },
      {
        "popularity": 94.28,
        "vote_count": 8208,
        "video": false,
        "poster_path": "/igw938inb6Fy0YVcwIyxQ7Lu5FO.jpg",
        "id": 496243,
        "adult": false,
        "backdrop_path": "/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",
        "original_language": "ko",
        "original_title": "기생충",
        "genre_ids": [
          35,
          18,
          53
        ],
        "title": "Parasita",
        "vote_average": 8.5,
        "overview": "Toda a família de Ki-taek está desempregada, vivendo num porão sujo e apertado. Uma obra do acaso faz com que o filho adolescente da família comece a dar aulas de inglês à garota de uma família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe, filho e filha bolam um plano para se infiltrarem também na família burguesa, um a um. No entanto, os segredos e mentiras necessários à ascensão social custarão caro a todos.",
        "release_date": "2019-11-07"
      },
      {
        "popularity": 94.28,
        "vote_count": 8208,
        "video": false,
        "poster_path": "/igw938inb6Fy0YVcwIyxQ7Lu5FO.jpg",
        "id": 496243,
        "adult": false,
        "backdrop_path": "/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",
        "original_language": "ko",
        "original_title": "기생충",
        "genre_ids": [
          35,
          18,
          53
        ],
        "title": "Parasita",
        "vote_average": 8.5,
        "overview": "Toda a família de Ki-taek está desempregada, vivendo num porão sujo e apertado. Uma obra do acaso faz com que o filho adolescente da família comece a dar aulas de inglês à garota de uma família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe, filho e filha bolam um plano para se infiltrarem também na família burguesa, um a um. No entanto, os segredos e mentiras necessários à ascensão social custarão caro a todos.",
        "release_date": "2019-11-07"
      },
      {
        "popularity": 94.28,
        "vote_count": 8208,
        "video": false,
        "poster_path": "/igw938inb6Fy0YVcwIyxQ7Lu5FO.jpg",
        "id": 496243,
        "adult": false,
        "backdrop_path": "/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",
        "original_language": "ko",
        "original_title": "기생충",
        "genre_ids": [
          35,
          18,
          53
        ],
        "title": "Parasita",
        "vote_average": 8.5,
        "overview": "Toda a família de Ki-taek está desempregada, vivendo num porão sujo e apertado. Uma obra do acaso faz com que o filho adolescente da família comece a dar aulas de inglês à garota de uma família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe, filho e filha bolam um plano para se infiltrarem também na família burguesa, um a um. No entanto, os segredos e mentiras necessários à ascensão social custarão caro a todos.",
        "release_date": "2019-11-07"
      },
      {
        "popularity": 94.28,
        "vote_count": 8208,
        "video": false,
        "poster_path": "/igw938inb6Fy0YVcwIyxQ7Lu5FO.jpg",
        "id": 496243,
        "adult": false,
        "backdrop_path": "/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",
        "original_language": "ko",
        "original_title": "기생충",
        "genre_ids": [
          35,
          18,
          53
        ],
        "title": "Parasita",
        "vote_average": 8.5,
        "overview": "Toda a família de Ki-taek está desempregada, vivendo num porão sujo e apertado. Uma obra do acaso faz com que o filho adolescente da família comece a dar aulas de inglês à garota de uma família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe, filho e filha bolam um plano para se infiltrarem também na família burguesa, um a um. No entanto, os segredos e mentiras necessários à ascensão social custarão caro a todos.",
        "release_date": "2019-11-07"
      },
      {
        "popularity": 94.28,
        "vote_count": 8208,
        "video": false,
        "poster_path": "/igw938inb6Fy0YVcwIyxQ7Lu5FO.jpg",
        "id": 496243,
        "adult": false,
        "backdrop_path": "/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",
        "original_language": "ko",
        "original_title": "기생충",
        "genre_ids": [
          35,
          18,
          53
        ],
        "title": "Parasita",
        "vote_average": 8.5,
        "overview": "Toda a família de Ki-taek está desempregada, vivendo num porão sujo e apertado. Uma obra do acaso faz com que o filho adolescente da família comece a dar aulas de inglês à garota de uma família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe, filho e filha bolam um plano para se infiltrarem também na família burguesa, um a um. No entanto, os segredos e mentiras necessários à ascensão social custarão caro a todos.",
        "release_date": "2019-11-07"
      },
      {
        "popularity": 94.28,
        "vote_count": 8208,
        "video": false,
        "poster_path": "/igw938inb6Fy0YVcwIyxQ7Lu5FO.jpg",
        "id": 496243,
        "adult": false,
        "backdrop_path": "/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",
        "original_language": "ko",
        "original_title": "기생충",
        "genre_ids": [
          35,
          18,
          53
        ],
        "title": "Parasita",
        "vote_average": 8.5,
        "overview": "Toda a família de Ki-taek está desempregada, vivendo num porão sujo e apertado. Uma obra do acaso faz com que o filho adolescente da família comece a dar aulas de inglês à garota de uma família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe, filho e filha bolam um plano para se infiltrarem também na família burguesa, um a um. No entanto, os segredos e mentiras necessários à ascensão social custarão caro a todos.",
        "release_date": "2019-11-07"
      },
      {
        "popularity": 94.28,
        "vote_count": 8208,
        "video": false,
        "poster_path": "/igw938inb6Fy0YVcwIyxQ7Lu5FO.jpg",
        "id": 496243,
        "adult": false,
        "backdrop_path": "/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",
        "original_language": "ko",
        "original_title": "기생충",
        "genre_ids": [
          35,
          18,
          53
        ],
        "title": "Parasita",
        "vote_average": 8.5,
        "overview": "Toda a família de Ki-taek está desempregada, vivendo num porão sujo e apertado. Uma obra do acaso faz com que o filho adolescente da família comece a dar aulas de inglês à garota de uma família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe, filho e filha bolam um plano para se infiltrarem também na família burguesa, um a um. No entanto, os segredos e mentiras necessários à ascensão social custarão caro a todos.",
        "release_date": "2019-11-07"
      }]
    this.appElement = document.getElementById('app');
    this.appElement.innerHTML = this.render();
    this.eventListener();
    this.render =this.render.bind(this);
  }




  popularMovies() {
    this.movies.forEach(
      e => {
        let pos = this.movies.indexOf(e);
        this.popular.push(/*html*/`
          <span key=${pos}>
          <img class="favorite"src=${favoriteImg} />

          <img class="poster" src="https://image.tmdb.org/t/p/w300/${e.poster_path}"/>
          </span>
          `)
      })
  }
  
  eventListener() {
    let fav = []
    document.addEventListener("DOMContentLoaded", function(event) { 
      document.querySelectorAll(".poster").forEach((e,i) => {
        e.addEventListener("click", (e,i)=> {
          fav.push(e.target.src);
          this.favorites = fav;
        });
      })
    });
    
  }



render() {

  this.popularMovies();


  

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
              <h4>${this.movies[1].title}</h4>
              <p>${this.movies[1].overview}</p>
            </div>
            <img src="https://image.tmdb.org/t/p/w780/${this.movies[1].backdrop_path}"/>
          </article>
          <article class="secondary-movies">
            <img src="https://image.tmdb.org/t/p/w300/${this.movies[0].backdrop_path}"/>
            <img src="https://image.tmdb.org/t/p/w300/${this.movies[0].backdrop_path}"/>
          </article>
        </div>
        <div class="popular">
          <h2>Populares</h2>
          <div class="movies">
          ${this.popular.join('')}
          </div>
        </div>
        <div class="favorites">
          <h2>Favoritos</h2>
          <div class="movie">
          ${this.favorites.join('')}
          </div>
        </div>
     </div>

    `;

  return app;
}
}

const app = new App();