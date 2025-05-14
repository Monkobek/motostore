<template>
  <div class="catalog">
    <h2>Каталог</h2>

    <div class="categories-filter">
      <button
        v-for="cat in categories"
        :key="cat"
        :class="{ active: selectedCategory === cat }"
        @click="selectedCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <div class="product-grid">
      <ProductCard
        v-for="(item, index) in filteredProducts"
        :key="index"
        :title="item.title"
        :description="item.description"
        :price="item.price"
        :image="item.image"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductCard from '../components/ProductCard.vue'

const selectedCategory = ref('Все')

const categories = [
  'Все',
  'Кроссовые мотоциклы',
  'Эндуро мотоциклы',
  'Квадроциклы',
  'Гоночные квадроциклы',
  'Экипировка'
]

const products = [
  {
    title: 'Yamaha YZ250F',
    description: 'Кроссовый мотоцикл для мотоспорта.',
    price: 450000,
    image: '/images/yz250f.jpg',
    category: 'Кроссовые мотоциклы'
  },
  {
    title: 'Honda CRF250R',
    description: 'Лёгкий и мощный кроссовый байк.',
    price: 430000,
    image: 'images/crf250r.jpg',
    category: 'Кроссовые мотоциклы'
  },
  {
    title: 'KTM EXC 500',
    description: 'Эндуро мотоцикл для бездорожья.',
    price: 520000,
    image: '/images/crf250r.jpg',
    category: 'Эндуро мотоциклы'
  },
  {
    title: 'Husqvarna FE 350',
    description: 'Эндуро с отличной подвеской и мощностью.',
    price: 499000,
    image: '/images/fe350.jpg',
    category: 'Эндуро мотоциклы'
  },
  {
    title: 'CFMOTO CFORCE 600',
    description: 'Квадроцикл для охоты и путешествий.',
    price: 580000,
    image: '/images/cfmoto600.jpg',
    category: 'Квадроциклы'
  },
  {
    title: 'BRP Outlander 570',
    description: 'Надёжный утилитарный квадроцикл.',
    price: 610000,
    image: '/images/outlander570.jpg',
    category: 'Квадроциклы'
  },
  {
    title: 'Yamaha Raptor 700R',
    description: 'Гоночный квадроцикл с высокой мощностью.',
    price: 630000,
    image: '/images/raptor700.jpg',
    category: 'Гоночные квадроциклы'
  },
  {
    title: 'Can-Am Renegade X xc 1000R',
    description: 'Гоночный монстр с агрессивным дизайном.',
    price: 780000,
    image: '/images/renegade1000r.jpg',
    category: 'Гоночные квадроциклы'
  },

  {
  title: 'Шлем Fox V1',
  description: 'Надёжный и стильный мотошлем с вентиляцией.',
  price: 12500,
  image: '/images/fox-helmet.jpg',
  category: 'Экипировка'
},
{
  title: 'Мотоперчатки Thor',
  description: 'Перчатки с защитой пальцев, удобные для кросса.',
  price: 3500,
  image: '/images/thor-gloves.jpg',
  category: 'Экипировка'
},
{
  title: 'Защита тела Leatt',
  description: 'Полноценная броня для эндуро и мотокросса.',
  price: 14500,
  image: 'images/leatt-body.jpg',
  category: 'Экипировка'
  
},
{
  title: 'Мотоботы Fox Comp',
  description: 'Удобные мотоботы с усиленной защитой голени.',
  price: 18500,
  image: '/public/images/fox-boots.jpg',
  category: 'Экипировка'
},
{
  title: 'Куртка Thor Terrain',
  description: 'Мотокуртка для любых погодных условий.',
  price: 22500,
  image: '/images/thor-jacket.jpg',
  category: 'Экипировка'
},
{
  title: 'Yamaha WR250F',
  description: 'Эндуро с отличной подвеской и управляемостью.',
  price: 620000,
  image: '/images/wr250f.jpg',
  category: 'Эндуро мотоциклы'
},
{
  title: 'Kawasaki KX450',
  description: 'Кроссовый мотоцикл для гонок и тренировок.',
  price: 670000,
  image: '/images/kx450.jpg',
  category: 'Кроссовые мотоциклы'
},
{
  title: 'Stels Guepard 850',
  description: 'Мощный утилитарный квадроцикл российского производства.',
  price: 740000,
  image: '/images/guepard850.jpg',
  category: 'Квадроциклы'
},
{
  title: 'Can-Am DS 250',
  description: 'Лёгкий гоночный квадроцикл для начинающих.',
  price: 420000,
  image: '/images/ds250.jpg',
  category: 'Гоночные квадроциклы'
}
]


const filteredProducts = computed(() => {
  if (selectedCategory.value === 'Все') return products
  return products.filter(p => p.category === selectedCategory.value)
})
</script>

<style scoped>
.categories-filter {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.categories-filter button {
  background-color: #1a1a1a;
  color: rgb(255, 255, 255);
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.categories-filter button.active {
  background-color: #e63946;
}
.catalog {
  background-color: rgba(255, 255, 255, 0.85);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
}

.product-grid {
   display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
}
</style>
