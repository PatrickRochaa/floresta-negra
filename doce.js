let doceJson = [
  {
    id: 0,
    name: "Taças",
    img: "imagens/doces/taca.jpg",
    price: 150.0,
    quantidade: 0,
    acao: '<a href="#" class="comprou">Comprar</a>',
  },

  {
    id: 1,
    name: "Ovo de Colher",
    img: "imagens/doces/ovo-pascoa.jpg",
    price: 70.0,
    quantidade: 0,
    acao: '<a href="#" class="comprou">Comprar</a>',
  },

  {
    id: 2,
    name: "Doces Finos",
    img: "imagens/doces/doces-finos.jpg",
    price: 270.0,
    quantidade: 0,
    acao: '<a href="#" class="comprou">Comprar</a>',
  },

  {
    id: 3,
    name: "Brigadeiro",
    img: "imagens/doces/brigadeiros.jpg",
    price: 120.0,
    quantidade: 0,
    acao: '<a href="#" class="comprou">Comprar</a>',
  },

  {
    id: 4,
    name: "Bolo",
    img: "imagens/doces/bolo.jpg",
    price: 130.0,
    quantidade: 0,
    acao: '<a href="#" class="comprou">Comprar</a>',
  },

  {
    id: 5,
    name: "Barra Recheada",
    img: "imagens/doces/barra-chocolate.jpg",
    price: 45.0,
    quantidade: 0,
    acao: '<a href="#" class="comprou">Comprar</a>',
  },
];

doceJson.map((item, index) => {
  let doceItem = document.querySelector(".doces .doce").cloneNode(true);

  document.querySelector(".lista-doce").append(doceItem);
  //preencher dados

  doceItem.querySelector(".doce-item--img img").src = item.img;
  doceItem.querySelector(".doce-item--name").innerHTML = item.name;
  doceItem.querySelector(
    ".doce-item--price"
  ).innerHTML = `R$: ${item.price.toFixed(2)}`;
  doceItem.querySelector(".comprou").innerHTML = item.acao;
});
