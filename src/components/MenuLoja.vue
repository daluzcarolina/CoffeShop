<template>
  <div class="menu-container">
    <div class="header">
      <img :src="logo" alt="Logo" class="logo" />
      <h1 class="site-name">Coffe Shop Tia Rosa</h1>
    </div>
    <nav class="horizontal-menu">
      <ul>
        <li v-for="item in menuItems" :key="item.name">
          <a :href="item.href">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import logo from '../assets/logo.png';

export default {
  name: 'MenuLoja',
  data() {
    return {
      logo,
      menuItems: [
        { name: 'Início', href: '/' },
        { name: 'Sobre Nós', href: '/about' },
        { name: 'Cardápio', href: '/cardapio' },
        { name: 'Localização', href: '/localizacao' }
      ]
    };
  }
}
</script>

<style scoped>
.menu-container {
  text-align: center;
}

.header {
  background-color: white;
  padding: 1px;
  color:rgb(122, 86, 18);
}

.logo {
  height: 100px;
}

.site-name {
  margin: 30px 0;
  font-size: 34px;
  font-family: 'Matemasie', sans-serif; 
}

.horizontal-menu {
  background-color: white;
  padding: 10px;
}

.horizontal-menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.horizontal-menu li {
  margin: 0 30px;
}

.horizontal-menu a {
  color: rgb(122, 86, 18);
  text-decoration: none;
  font-weight: bold;
}

.horizontal-menu a:hover {
  text-decoration: underline;
}
</style>
