// Seleciona os elementos principais do HTML
const fundo = document.querySelector(".fundo"); // pega a área principal onde tudo acontece
const pergunta = document.querySelector(".pergunta"); // pega o texto da pergunta
const simBt = document.querySelector(".sim-bt"); // pega o botão "Sim"
const naoBt = document.querySelector(".nao-bt"); // pega o botão "Não"
const btn = document.querySelector(".btn-grupo"); // pega o grupo onde ficam os botões

// Quando clica no botão "Sim"
simBt.addEventListener("click", () => {
  // muda o texto da pergunta
  pergunta.innerHTML = "Uhuuull!!! 🎉";

  // cria um parágrafo novo (subtexto) logo abaixo
  const subtexto = document.createElement("p");
  subtexto.innerText = "Sabia que você ia dizer SIM!"; // mensagem personalizada
  subtexto.style.color = "#02048a"; // cor do texto
  subtexto.style.fontSize = "1.2em"; // tamanho da fonte
  fundo.appendChild(subtexto); // adiciona esse texto na tela

  // esconde os botões "Sim" e "Não"
  btn.style.display = "none";

  // cria uma imagem (gif) de comemoração
  const gif = document.createElement("img");
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YXpkYXR2Zm9lMDB4cWo4cThhYXF0Y3NkMngyZ3M1cmoxODQzOWpxeSZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/tHIRLHtNwxpjIFqPdV/giphy.gif"; // link do gif
  gif.alt = "Gatinho comemorando";
  gif.style.width = "250px"; // tamanho do gif
  gif.style.marginTop = "1px"; // margem superior
  fundo.appendChild(gif); // adiciona o gif na tela

  // cria um botão de "Voltar"
  const voltarBt = document.createElement("button");
  voltarBt.innerText = "Voltar";
  voltarBt.classList.add("voltar-bt"); // adiciona uma classe CSS para estilo
  fundo.appendChild(voltarBt);

  // ação do botão voltar → recarrega a página
  voltarBt.addEventListener("click", () => {
    location.reload(); // recarrega a página do zero
  });
});

const clickNao = () => {
  // pega as dimensões da área principal (fundo)
  const fundoRect = fundo.getBoundingClientRect();
  // pega as dimensões do botão "Não"
  const naoBtRect = naoBt.getBoundingClientRect();

  // gera posições aleatórias (x e y) dentro da área do fundo
  const i = Math.floor(Math.random() * (fundoRect.width - naoBtRect.width));
  const j = Math.floor(Math.random() * (fundoRect.height - naoBtRect.height));

  // muda a posição do botão "Não" na tela
  naoBt.style.left = i + "px";
  naoBt.style.top = j + "px";
};

// Quando o mouse passa por cima do botão "Não"
naoBt.addEventListener("mouseover", clickNao);
naoBt.addEventListener("touchstart", clickNao);
