<template>
    <div class="cardapio-container">
      <h1 class="cardapio-title">Nosso Cardápio</h1>
      <div class="categoria">
        <h2>Cafés Especiais</h2>
        <ul>
          <li>
            <span class="item">Espresso</span>
            <span class="preco">R$5,00</span>
          </li>
          <li>
            <span class="item">Cappuccino</span>
            <span class="preco">R$7,00</span>
          </li>
          <li>
            <span class="item">Latte</span>
            <span class="preco">R$6,50</span>
          </li>
        </ul>
      </div>
      <div class="categoria">
        <h2>Doces</h2>
        <ul>
          <li>
            <span class="item">Brownie</span>
            <span class="preco">R$4,00</span>
          </li>
          <li>
            <span class="item">Torta de Limão</span>
            <span class="preco">R$6,00</span>
          </li>
          <li>
            <span class="item">Cheesecake</span>
            <span class="preco">R$8,00</span>
          </li>
        </ul>
      </div>
      <div class="categoria">
        <h2>Salgados</h2>
        <ul>
          <li>
            <span class="item">Coxinha</span>
            <span class="preco">R$3,50</span>
          </li>
          <li>
            <span class="item">Empada</span>
            <span class="preco">R$4,00</span>
          </li>
          <li>
            <span class="item">Pão de Queijo</span>
            <span class="preco">R$2,50</span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <style scoped>
  .cardapio-container {
    background-color: #f7f3e9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto;
  }
  
  .cardapio-title {
    color: rgb(122, 86, 18);
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-family: 'Georgia', serif;
    border-bottom: 3px solid rgb(122, 86, 18);
    display: inline-block;
    padding-bottom: 10px;
  }
  
  .categoria {
    margin-bottom: 20px;
  }
  
  .categoria h2 {
    color: rgb(122, 86, 18);
    font-size: 1.8rem;
    border-bottom: 2px solid rgb(122, 86, 18);
    margin-bottom: 10px;
    font-family: 'Georgia', serif;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: #4d3e29;
    font-size: 1.2rem;
  }
  
  .item {
    font-family: 'Georgia', serif;
  }
  
  .preco {
    background-color: rgb(122, 86, 18);
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
    font-family: 'Georgia', serif;
  }
  </style>
  