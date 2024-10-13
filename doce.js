let doceJson = [
  // Produtos
  {
    id: 0,
    name: "Taças",
    img: "imagens/doces/taca.jpg",
    price: "150,00",
    quantidade: 1,
    acao: "comprar",
  },
  {
    id: 1,
    name: "Ovo de Colher",
    img: "imagens/doces/ovo-pascoa.jpg",
    price: "70,00",
    quantidade: 1,
    acao: "comprar",
  },
  {
    id: 2,
    name: "Doces Finos",
    img: "imagens/doces/doces-finos.jpg",
    price: "270,00",
    quantidade: 1,
    acao: "comprar",
  },
  {
    id: 4,
    name: "Brigadeiro",
    img: "imagens/doces/brigadeiros.jpg",
    price: "120,00",
    quantidade: 1,
    acao: "comprar",
  },
  {
    id: 5,
    name: "Barra Recheada",
    img: "imagens/doces/barra-chocolate.jpg",
    price: "45,00",
    quantidade: 1,
    acao: "comprar",
  },
  {
    id: 6,
    name: "Bolo",
    img: "imagens/doces/bolo.jpg",
    price: "130,00",
    quantidade: 1,
    acao: "comprar",
  },
];

// Exibindo os dados na tela
doceJson.forEach((item) => {
  const doceItem = document.querySelector(".doces .doce").cloneNode(true);
  doceItem.querySelector(".doce-item--img").src = item.img;
  doceItem.querySelector(".doce-item--name").innerHTML = item.name;
  doceItem.querySelector(".doce-item--price").innerHTML = `R$: ${item.price}`;
  doceItem.querySelector(".comprou").innerHTML = item.acao;
  document.querySelector(".lista-doce").append(doceItem);
});

// Array do carrinho
let cartList = [];

// Onde vai ser exibido o total do carrinho
const cartTotal = document.getElementById("cart-total");
const cartLength = document.querySelector(".cartQtd");

// Botão para adicionar ao carrinho
document.querySelectorAll(".comprou").forEach((doceAdd) => {
  doceAdd.addEventListener("click", addItem);
});

function addItem(event) {
  const section = event.target.closest(".doce");
  const nameProduct = section.querySelector(".doce-item--name").innerHTML;
  const imgProduct = section.querySelector(".doce-item--img").src;
  const priceProduct = parseFloat(
    section
      .querySelector(".doce-item--price")
      .innerHTML.replace("R$: ", "")
      .replace(".", "")
      .replace(",", ".")
  );

  const temItem = cartList.find((item) => item.nameProduct === nameProduct);

  if (temItem) {
    temItem.qtdProduct += 1; // Aumenta a quantidade
  } else {
    cartList.push({
      nameProduct,
      imgProduct,
      priceProduct,
      qtdProduct: 1,
    });
  }

  updateCartModal();
}

// Função para habilitar ou desabilitar o botão "Enviar Endereço"
function toggleCheckoutButton() {
  const checkoutBtn = document.getElementById("checkout-btn");
  checkoutBtn.disabled = cartList.length === 0; // Desabilita se não houver produtos
}

// Atualizar Carrinho
function updateCartModal() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = ""; // Limpa o conteúdo anterior
  let total = 0; // Total do carrinho

  cartList.forEach((item) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("cartContainer");

    cartItemElement.innerHTML = `
      <img src="${item.imgProduct}" alt="foto ${item.nameProduct}" />
      <div class="infoContainer">
        <h4>${item.nameProduct}</h4>
        <p>Quantidade: <span>${item.qtdProduct}</span></p>
        <span>R$: ${item.priceProduct.toFixed(2)}</span>
      </div>
      <div class="btnQtd">
        <button onclick="removeItem('${item.nameProduct}')">Remover</button>
        <button onclick="comprouMais('${item.nameProduct}')">Adicionar</button>
      </div>
    `;

    total += item.priceProduct * item.qtdProduct;
    cartItemsContainer.appendChild(cartItemElement);
  });

  // Exibindo o total do carrinho
  cartTotal.textContent = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  // Exibindo o total de produtos no carrinho
  cartLength.innerHTML = cartList.length > 0 ? cartList.length : "";

  // Atualiza o estado do botão de enviar endereço
  toggleCheckoutButton();
}

// Função para remover um item ou diminuir a quantidade
function removeItem(nameProduct) {
  const temItem = cartList.find((item) => item.nameProduct === nameProduct);

  if (temItem) {
    temItem.qtdProduct -= 1;
    if (temItem.qtdProduct < 1) {
      cartList = cartList.filter((item) => item.nameProduct !== nameProduct);
    }
  }

  updateCartModal();
}

// Função para adicionar mais de um item
function comprouMais(nameProduct) {
  const temItem = cartList.find((item) => item.nameProduct === nameProduct);
  if (temItem) {
    temItem.qtdProduct += 1;
  }

  updateCartModal();
}

// Inicializando o modal (carrinho)
function initModal() {
  const cartBtn = document.querySelector(".btn-cart");
  const cartModal = document.getElementById("cart-modal");
  const closeModalBtn = document.getElementById("close-modal-btn");

  // Abrindo o Modal do carrinho
  cartBtn.addEventListener("click", () => {
    cartModal.style.display = "flex";
  });

  // Fechar Modal do carrinho clicando fora do Modal
  cartModal.addEventListener("click", (event) => {
    if (event.target === cartModal) {
      cartModal.style.display = "none";
    }
  });

  // Fechar Modal do carrinho clicando no botão fechar
  closeModalBtn.addEventListener("click", () => {
    cartModal.style.display = "none";
  });
}

// Chamando função para abrir o modal
initModal();

// Funções para checkout e voltar ao carrinho
document.getElementById("checkout-btn").addEventListener("click", () => {
  const cartItems = document.getElementById("cart-items");
  const cartPedido = document.querySelector(".cartPedido");
  const checkoutForm = document.getElementById("checkout-form");

  cartItems.style.display = "none";
  cartPedido.style.display = "none";
  checkoutForm.style.display = "block";
});

// Voltar para ver os produtos
document.getElementById("back-to-cart").addEventListener("click", (event) => {
  event.preventDefault();
  const cartItems = document.getElementById("cart-items");
  const cartPedido = document.querySelector(".cartPedido");
  const checkoutForm = document.getElementById("checkout-form");

  cartItems.style.display = "block";
  cartPedido.style.display = "flex";
  checkoutForm.style.display = "none";
});

/* Validação e Envio via WhatsApp */
const btnAddres = document.querySelector(".addres-btn");
btnAddres.addEventListener("click", sendWhatsAppMessage);

// Função para enviar o pedido via WhatsApp
function sendWhatsAppMessage(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Validação dos campos
  if (!validateForm()) {
    return;
  }

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const number = document.getElementById("number").value;

  // Gerar o texto do pedido
  let pedido = "Pedido:\n";
  cartList.forEach((item) => {
    pedido += `- ${item.qtdProduct}x ${
      item.nameProduct
    } (R$ ${item.priceProduct.toFixed(2)})\n`;
  });

  const total = cartList.reduce(
    (sum, item) => sum + item.qtdProduct * item.priceProduct,
    0
  );
  pedido += `\nTotal: R$ ${total.toFixed(2)}\n`;

  // Adicionar as informações de entrega
  const enderecoEntrega = `\nEndereço de Entrega:\nNome: ${name}\nEndereço: ${address}\nNúmero: ${number}`;

  // Construir a mensagem completa
  const mensagem = `${pedido}${enderecoEntrega}`;

  // Codificar a mensagem para usar na URL
  const encodedMessage = encodeURIComponent(mensagem);

  // Número de telefone do WhatsApp (substitua pelo número correto)
  const whatsappNumber = "5531987635707"; // Exemplo de número

  // Criar o link do WhatsApp com a mensagem
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

  // Redirecionar para o WhatsApp
  window.open(whatsappLink, "_blank");

  // Limpar o formulário e o carrinho após o envio
  clearFormAndCart();
}

// Função para limpar o formulário e o carrinho
function clearFormAndCart() {
  // Limpar o formulário
  document.getElementById("checkout-form").reset();

  // Limpar o array do carrinho
  cartList = [];

  // Atualizar o carrinho para refletir a remoção dos itens
  updateCartModal();

  // Esconder o formulário e voltar a mostrar o carrinho vazio
  const cartItems = document.getElementById("cart-items");
  const cartPedido = document.querySelector(".cartPedido");
  const checkoutForm = document.getElementById("checkout-form");

  cartItems.style.display = "block";
  cartPedido.style.display = "flex"; // Ajustar para o estilo necessário
  checkoutForm.style.display = "none";
}

// Função para validar os campos do formulário
function validateForm() {
  let isValid = true;

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const number = document.getElementById("number").value;

  const nameWarn = document.getElementById("name-warn");
  const addressWarn = document.getElementById("address-warn");
  const numberWarn = document.getElementById("number-warn");

  if (!name.trim()) {
    nameWarn.style.display = "block";
    isValid = false;
  } else {
    nameWarn.style.display = "none";
  }

  if (!address.trim()) {
    addressWarn.style.display = "block";
    isValid = false;
  } else {
    addressWarn.style.display = "none";
  }

  if (!number.trim()) {
    numberWarn.style.display = "block";
    isValid = false;
  } else {
    numberWarn.style.display = "none";
  }

  return isValid;
}

// Função para ocultar os alertas ao digitar
function hideAlertOnInput() {
  document.getElementById("name").addEventListener("input", () => {
    document.getElementById("name-warn").style.display = "none";
  });

  document.getElementById("address").addEventListener("input", () => {
    document.getElementById("address-warn").style.display = "none";
  });

  document.getElementById("number").addEventListener("input", () => {
    document.getElementById("number-warn").style.display = "none";
  });
}

// Chamar a função para ocultar alertas ao digitar
hideAlertOnInput();
