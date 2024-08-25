<template>
    <div class="location-container">
      <h1 class="location-title">Encontre-nos Aqui</h1>
      <div class="contact-info">
        <p><strong>Endereço:</strong> SQN 412, Asa Norte, Bloco B, Loja 21</p>
        <p><strong>Telefone:</strong> (61) 1234-5678</p>
        <p><strong>E-mail:</strong> contato@tiarosa-coffee.com</p>
      </div>
      <div class="map-iframe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30718.18126851237!2d-47.926126980522994!3d-15.763161389703013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3a5234fcfd1f%3A0x8eff4eece5843e21!2sAsa%20Norte%2C%20Bras%C3%ADlia%20-%20DF%2C%20Brasil!5e0!3m2!1spt-BR!2suk!4v1724453987973!5m2!1spt-BR!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         
              </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LocationSection'
  }
  </script>
  
  <style scoped>
  .location-container {
    text-align: center;
    margin: 40px auto;
    padding: 20px;
    max-width: 800px;
    background-color: #fff7e6;
    border: 2px solid rgb(122, 86, 18);
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .location-title {
    color: rgb(122, 86, 18);
    font-size: 2.5em;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  
  .contact-info {
    font-size: 1.2em;
    color: #333;
    margin-bottom: 20px;
  }
  
  .contact-info p {
    margin: 5px 0;
  }
  
  .map-iframe {
    display: inline-block;
    border: 3px solid rgb(122, 86, 18);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .map-iframe iframe {
    border: none;
  }
  </style>
  