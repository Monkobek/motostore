<template>
  <div class="home">
   <section class="hero">
  <div class="hero-banner-container">
    <div class="side-banner">
      <img src="/images/left-banner.jpg" alt="Левый баннер" />
    </div>
    <div class="hero-content">
      <h2>Добро пожаловать в МотоМагазин</h2>
      <p>У нас вы найдёте кроссовые мотоциклы, квадроциклы и экипировку.</p>
      <router-link to="/catalog" class="cta-button">Перейти в каталог</router-link>
    </div>
    <div class="side-banner">
      <img src="/images/right-banner.jpg" alt="Правый баннер" />
    </div>
  </div>
</section>

    <section class="about">
     <h3>О нас</h3>
  <p>
    МотоМагазин — это не просто онлайн-магазин мототехники. Это команда профессионалов, объединённых страстью к скорости, свободе и технологиям.
    Мы с 2017 года поставляем только качественную продукцию от ведущих мировых брендов: Yamaha, KTM, Honda, Polaris,и других.
  </p>
  <p>
    Мы гордимся тем, что предлагаем нашим клиентам не просто технику, а надёжных спутников для приключений. 
    У нас вы найдёте широкий выбор мотоциклов, квадроциклов, скутеров, а также защитной экипировки и аксессуаров.
  </p>
  <p>
    Наша миссия — сделать мотомир доступным каждому. Мы заботимся о вашем комфорте: бесплатная доставка, удобная система оплаты, квалифицированная техподдержка, гарантия возврата.
  </p>
  <p>
    Неважно, новичок вы или опытный райдер — в МотоМагазине вы всегда получите персональную консультацию, быстрый сервис и уверенность в покупке.
  </p>
      <section class="features">
  <h3>Почему выбирают нас?</h3>
  <ul>
    <li>✔️ Гарантия на всю технику</li>
    <li>✔️ Бесплатная доставка от 50 000 ₽</li>
    <li>✔️ Работаем по всей России</li>
    <li>✔️ Консультации и поддержка 7 дней в неделю</li>
  </ul>
</section>

    </section>
    <section class="slider">
     <img
    v-for="(img, index) in images"
    :key="index"
    :src="img"
    :class="{ active: index === current }"
    class="slide"
  />
    </section>
    <section class="how-it-works">
  <h3>Как оформить заказ?</h3>
  <ol>
    <li>Выберите товар из каталога</li>
    <li>Добавьте его в корзину</li>
    <li>Заполните контактные данные</li>
    <li>Получите товар курьером или в пункте самовывоза</li>
  </ol>
</section>
<section class="reviews">
  <h3>Отзывы наших клиентов</h3>
  <div class="review">
    <p>"Отличный магазин! Купил квадроцикл — доставили быстро, техника 🔥"</p>
    <span>- Игорь, г. Екатеринбург</span>
  </div>
  <div class="review">
    <p>"Приятный сервис, помогли выбрать шлем. Буду заказывать ещё."</p>
    <span>- Алена, г. Казань</span>
  </div>
</section>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const images = [
  '/public/slider1.jpg',
  '/public/slider2.jpg',
  '/public/slider3.jpg',
]

const current = ref(0)

onMounted(() => {
  setInterval(() => {
    current.value = (current.value + 1) % images.length
  }, 3000)
})
</script>
<style scoped>
.hero-banner-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.side-banner {
  width: 500px;
  aspect-ratio: 2 / 3; /* Пропорции 2:3 */
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.side-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-content {
  text-align: center;
  max-width: 1000px;
}



.about {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
  line-height: 1.6;
}

.about h3 {
  margin-bottom: 15px;
  font-size: 24px;
  color: #1a1a1a;
}

.about p {
  margin-bottom: 12px;
}
.home {
   background-color: rgba(255, 255, 255, 0.8); /* белый с прозрачностью */
  backdrop-filter: blur(4px);                /* лёгкое размытие фона */
  padding: 30px;
  color: #1a1a1a;
}

.hero {
  background-color: #ffffff;
  padding: 40px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.cta-button {
  display: inline-block;
  margin-top: 20px;
  background-color: #e63946;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
}

.cta-button:hover {
  background-color: #ff5722;
}

.about {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}
.marquee {
  background-color: #e63946;
  color: #fff;
  font-weight: bold;
  padding: 10px 0;
  overflow: hidden;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.marquee p {
  animation: marquee 12s linear infinite;
  display: inline-block;
  padding-left: 100%;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}
.slider {
  position: relative;
  max-width: 900px;
  height: 400px;
  margin: 30px auto;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.slide.active {
  opacity: 1;
  z-index: 1;
}
.features {
  background-color: #ffffff;
  margin-top: 40px;
  padding: 30px;
  border-radius: 6px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.1);
}

.features ul {
  list-style: none;
  padding: 0;
}

.features li {
  margin-bottom: 10px;
  font-size: 16px;
}
.reviews {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 25px;
  margin-top: 30px;
  border-radius: 8px;
}

.review {
  margin-bottom: 20px;
}

.review p {
  font-style: italic;
}

.review span {
  display: block;
  text-align: right;
  font-weight: bold;
}
.how-it-works {
  background-color: rgba(255,255,255,0.9);
  padding: 25px;
  margin-top: 30px;
  border-radius: 8px;
}

.how-it-works ol {
  padding-left: 20px;
}
</style>
