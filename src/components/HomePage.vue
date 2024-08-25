<template>
  <div id="home">
    <div id="carouselExampleIndicators" class="carousel slide custom-carousel" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/panqueca.jpg" class="d-block w-100 custom-img" alt="...">
        </div>
        <div class="carousel-item">
          <img src="@/assets/cupcakes (2).jpg" class="d-block w-100 custom-img" alt="...">
        </div>
        <div class="carousel-item">
          <img src="@/assets/doces.jpg" class="d-block w-100 custom-img" alt="...">
        </div>
        <div class="carousel-item">
          <img src="@/assets/fatia.jpg" class="d-block w-100 custom-img" alt="...">
        </div>
        <div class="carousel-item">
          <img src="@/assets/slices.jpg" class="d-block w-100 custom-img" alt="...">
        </div>
        <div class="carousel-item">
          <img src="@/assets/pao.jpg" class="d-block w-100 custom-img" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <header>
      <h1>Bem-vindo(a) ao Coffee Shop Tia Rosa!</h1>
    </header>

    <p class="centralized-text">
      Um pedaço do <strong>paraíso</strong> no coração da cidade!
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
#home {
  font-family: Arial, sans-serif;
  color: #6d4c41;
  line-height: 1.6;
  margin: 20px;
  text-align: center; /* Centraliza o texto em todo o container */
}

header h1 {
  color: rgb(122, 86, 18);
  margin-bottom: 20px;
}

.custom-carousel {
  max-width: 800px;
  margin: 0 auto 30px auto; /* Centraliza o carrossel e adiciona espaçamento inferior */
}

.custom-carousel .carousel-item {
  max-height: 400px;
  overflow: hidden;
}

.custom-carousel .custom-img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(100%);
}

.centralized-text {
  margin: 20px 0;
  font-size: 1.2rem;
  color: #6d4c41;
}
</style>
