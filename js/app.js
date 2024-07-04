let listaProdutos = document.getElementById('lista-produtos');
let subTotal = 0;
let valorTotal = document.getElementById('valor-total');

function adicionar() {
    let produtoSelecionado = document.getElementById('produto').value;
    let qtdSelecionada = document.getElementById('quantidade').value;
    let nomeProduto = produtoSelecionado.split('-')[0];
    let valorProduto = produtoSelecionado.split('R$')[1];

    subTotal += (valorProduto * qtdSelecionada);
    valorTotal.textContent = `R$${subTotal}`;

    listaProdutos.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${qtdSelecionada}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
        </section>`;

        limparCampos();

}

function limparCarrinho() {
    listaProdutos.innerHTML = '';
    document.getElementById('quantidade').value = '';

}

function limparCampos() {
    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '';

}