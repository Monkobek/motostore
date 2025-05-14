<template>
  <div class="card">
    <img :src="image" :alt="title" />
    <h3>{{ title }}</h3>
    <p class="desc">{{ description }}</p>
    <p class="price">{{ price }} ₽</p>
    <button @click="addToCart">Добавить в корзину</button>
  </div>
</template>

<script setup>
import { cart } from '../store/cart.js'
import { notify } from '../store/notify.js'

const props = defineProps({
  title: String,
  description: String,
  price: Number,
  image: String
})

function addToCart() {
  cart.add({
    title: props.title,
    description: props.description,
    price: props.price,
    image: props.image
  })
  notify.show(`✅ ${props.title} добавлен в корзину`)
}
</script>

<style scoped>
.card {
  width: 250px;
  min-height: 400px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-4px);
}

.card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 6px;
}

.card h3 {
  font-size: 18px;
  margin: 12px 0 6px;
}

.card .desc {
  flex: 1;
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
}

.card .price {
  font-weight: bold;
  margin-bottom: 12px;
}

button {
  padding: 10px;
  background-color: #2a7a2f;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}

button:hover {
  background-color: #236425;
}
</style>
