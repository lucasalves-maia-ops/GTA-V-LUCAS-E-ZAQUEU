const titulo = document.querySelector("#titulo-GTA5");
const botao = document.querySelector("#botao-GTA5");
const descricao = document.querySelector("#descricao-GTA5");

function LerMais() {
    titulo.textContent = aviso.titulo;
    descricao.textContent = aviso.descricao;
}
botao.addEventListener("click", LerMais);

const aviso = {
    titulo: "O GRANDE GTA 5",
    descricao: "GTA V já vendeu mais de 200 milhões de cópias no mundo todo."
};

