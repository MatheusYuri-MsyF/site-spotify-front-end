// Seleciona os elementos do DOM para manipular as seções de artista e playlist
const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlists");
const searchInput = document.getElementById("search-input");

// Função para realizar uma requisição à API e buscar artistas com base no termo de pesquisa
function requestApi(searchTerm) {
  // Constrói a URL da API com o termo de pesquisa
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;

  fetch(url)
    .then((response) => response.json())  // Analisa a resposta como JSON
    .then((results) => displayResults(results)); // Chama a função displayResults com os resultados da busca
}

// Função para exibir as informações do artista na página
function displayResults(results) {
  // Esconde o container da playlist antes de exibir os detalhes do artista
  hidePlaylists();

  // Seleciona os elementos para exibir a imagem e o nome do artista
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");

  // Itera sobre o primeiro resultado da busca (assumindo um único resultado) e atualiza os elementos
  results.forEach((element) => {
    artistImage.src = element.urlImg;
    artistName.innerText = element.name;
  });

  // Mostra a seção de informações do artista
  resultArtist.classList.remove("hidden");
}

// Função para ocultar o container da playlist
function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}

// Adiciona um ouvinte de eventos para o campo de busca, disparando uma função quando o valor mudar
searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase(); // Converte o termo de pesquisa para minúsculas

  // Se o termo de pesquisa estiver vazio, esconde o artista e mostra as playlists
  if (searchTerm === "") {
    resultArtist.classList.add("hidden");
    playlistContainer.classList.remove("hidden");
    return;
  }

  // Chama a função requestApi com o termo de pesquisa inserido
  requestApi(searchTerm);
});
