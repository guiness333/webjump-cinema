# Cinema Webjump
## Introdução
Site com listagem de filmes da api de  [The Movie DB](https://developers.themoviedb.org) *[1]*.

## Objetivo 
Construir um site com um design de acordo com o template desenvolvido no [Figma](https://www.figma.com/)*[2]* como mostra a *Figura 1*, conexão com a API [The Movie DB](https://developers.themoviedb.org)*[1]*, opção para adicionar filme aos favoritos e salvar no localStorage. Utilizando como ferramentas o [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)*[3]* sem [frameworks](https://tableless.github.io/iniciantes/manual/js/o-que-framework.html)*[4]*, [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)*[5]* e [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)*[6]*

![template](https://i.imgur.com/hYOqq0N.png)  
*Figura 1 - Template Figma*

## Desenvolvimento
### HTML e CSS
O [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)*[5]* e [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)*[6]* foram utilizados para definir a organização e estilo do site nos arquivos [index.html](./public/index.html) e [style.css](./src/styles.css)

### JavaScript
O [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)*[3]* é utilizado para renderizar dinamicamente os filmes [main.js](./src/main.js), realizando requisições para a API [The Movie DB](https://developers.themoviedb.org)*[1]* [api.js](./src/api.js) para listar os filmes populares e filmes em exibição  Além disso o [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)*[3]* também é responsável por adicionar os filmes a lista de favoritos e salvar essa lista no localStorage, fazendo assim com que essa lista seja persistente no site.

## Funcionamento
Figura 2 mostra o resultado do desenvolvimento do site, com toda suas funcionalidades.

![Figura 2](https://i.imgur.com/xKNbTwP.png)
*Figura 2 - Resultado*

A *Figura 3* demonstra a funcionalidade de adição aos favoritos.

![Figura 3](https://i.imgur.com/nbBinyT.gif)  
*Figura 3 - Funcionamento da opção de adicionar aos favoritos.*

## Dificuldades encontradas
A principal dificuldade encontrada foi trabalhar com o eventListeners em objetos dinamicos, no caso o catálogo de filmes nos favoritos. Encontrei um pouco de dificuldade no carregamento do HTML, porém com a documentação [mozilla.org](https://developer.mozilla.org/pt-BR/docs/Web/Events/DOMContentLoaded) consegui entender melhor o funcionamento dos estados do html
`document.readyState` e `DOMContentLoaded`

## Conclusão
JavaScript é uma linguagem poderosa que permite a criação de sites complexos e dinamicos de forma simples mesmo sem a necessidade de um [frameworks](https://tableless.github.io/iniciantes/manual/js/o-que-framework.html)*[4]*

## Referências Bibliográficas

1. The Movie DB - Disponível em https://developers.themoviedb.org - Acesso em 08/07/2020;
2. Figma - Disponível em https://www.figma.com/ - Acesso em 08/07/2020;
3. JavaScript - Disponível em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript - Acesso em 08/07/2020;
4. Frameworks - Disponível em https://tableless.github.io/iniciantes/manual/js/o-que-framework.html - Acesso em 08/07/2020;
5. HTML - Disponível em https://developer.mozilla.org/pt-BR/docs/Web/HTML - Acesso em 08/07/2020;
6. CSS - Disponível em https://developer.mozilla.org/pt-BR/docs/Web/CSS - Acesso em 08/07/2020;

