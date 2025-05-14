<template>
  <div class="orders-page">
    <h2>Оформленные заказы</h2>

    <div v-if="orders.list.length === 0">
      <p>Нет заказов</p>
    </div>

    <div v-else>
      <div
  v-for="(order, index) in userOrders"
  :key="index"
>
        <h4>Заказ #{{ index + 1 }}</h4>
        <p><strong>Имя:</strong> {{ order.name }}</p>
        <p><strong>Телефон:</strong> {{ order.phone }}</p>
        <p><strong>Email:</strong> {{ order.email }}</p>
        <p><strong>Адрес:</strong> {{ order.address }}</p>
        <p><strong>Товаров:</strong> {{ order.items.length }}</p>
        <ul>
          <li v-for="(item, i) in order.items" :key="i">
            {{ item.title }} — {{ item.price }} ₽
          </li>
        </ul>
        <p><strong>Итого:</strong> {{ order.total }} ₽</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { orders } from '../store/orders.js'
import { currentUser } from '../store/auth.js'
import { computed } from 'vue'

const userOrders = computed(() =>
  orders.list.filter(order => order.user === currentUser.value)
)
</script>

<style scoped>
.orders-page {
  background-color: rgba(255,255,255,0.9);
  padding: 30px;
  border-radius: 10px;
}

.order {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.1);
}
</style>