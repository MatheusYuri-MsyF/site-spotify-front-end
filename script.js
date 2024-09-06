//BOM DIA | BOA TARDE | BOA NOITE

// Obtém a referência do elemento com o ID "greeting" para atualizar a saudação dinamicamente.
const greetingElement = document.getElementById("greeting");

// Obtém a hora atual do sistema em formato 24h para determinar a saudação adequada.
const currentHour = new Date().getHours();

// Define a mensagem de saudação com base na hora atual.
const greetingMessage =
  currentHour >= 5 && currentHour < 12
    ? "Bom dia"
    : currentHour >= 12 && currentHour < 18
    ? "Boa tarde"
    : "Boa noite";

// Atualiza o conteúdo do elemento com a saudação correspondente.
greetingElement.textContent = greetingMessage;

// Seleciona o container que será dividido em colunas responsivas.
const container = document.querySelector(".offer__list-item");

// Cria um observador de redimensionamento para monitorar mudanças no tamanho do container.
const observer = new ResizeObserver(() => {  //mudanças no tamanho do elemento 
  const containerWidth = container.offsetWidth; // Obtém a largura atual do container.
  const numColumns = Math.floor(containerWidth / 200); // Calcula o número de colunas com base na largura do container e em um tamanho mínimo de coluna.

  // Define o layout em grid do container, ajustando o número de colunas dinamicamente.
  container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;

  // Loga informações para fins de depuração (pode ser removido em produção).
  console.log({ container });
  console.log({ numColumns });
});

// Inicia a observação do container para detectar mudanças de tamanho.
observer.observe(container);
