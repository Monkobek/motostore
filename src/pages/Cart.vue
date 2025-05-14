<template>
    <div v-if="!isAuthenticated">
    <div class="modal-overlay">
      <div class="modal-window">
        <h3>🔒 Доступ запрещён</h3>
        <p>Пожалуйста, авторизуйтесь, чтобы использовать корзину.</p>
        <button @click="goToLogin">ОК</button>
      </div>
    </div>
  </div>
  <div v-else>
  <div class="cart-page">
    <h2>Корзина</h2>

    <div v-if="cart.items.length === 0">
      <p>Корзина пуста</p>
    </div>

    <div v-else class="cart-items">
      <div class="cart-item" v-for="(item, index) in cart.items" :key="index">
        <img :src="item.image" :alt="item.title" />
        <div class="info">
          <h4>{{ item.title }}</h4>
          <p>{{ item.price }} ₽</p>
          <button @click="cart.remove(index)">Удалить</button>
        </div>
      </div>

      <p class="total">Общая сумма: <strong>{{ cart.total }} ₽</strong></p>

      <form class="order-form" @submit.prevent="submitOrder">
        <h3>Оформление заказа</h3>
        <input type="text" v-model="name" placeholder="Ваше имя" required />
<input type="email" v-model="email" placeholder="Email" required />
<input type="tel" v-model="phone" placeholder="Телефон" required />
<textarea v-model="address" placeholder="Адрес доставки" required></textarea>

<p v-if="formError" class="error">{{ formError }}</p>
        <button type="submit">Оформить заказ</button>
      </form>
    </div>
  </div>
  <div v-if="showModal" class="modal-overlay">
  <div class="modal-window">
    <h3>🎉 Заказ принят!</h3>
    <p>Спасибо, {{ name }}!</p>
    <p>Подробности заказа будут отправлены на указанную почту или телефон.</p>
    <button @click="showModal = false">Ок</button>
  </div>
</div>
</div>
</template>

<script setup>
import { currentUser } from '../store/auth.js'
import { isAuthenticated } from '../store/auth.js'
import { useRouter } from 'vue-router'
import { orders } from '../store/orders.js'
import { cart } from '../store/cart.js'
import { ref } from 'vue'
const showModal = ref(false)
const name = ref('')
const phone = ref('')
const address = ref('')
const email = ref('')
const router = useRouter()

function goToLogin() {
  router.push('/') 
  localStorage.setItem('openLogin', 'true')
}
function submitOrder() {
    orders.add({
user: currentUser.value,
  name: name.value,
  phone: phone.value,
  email: email.value,
  address: address.value,
  items: [...cart.items],
  total: cart.total
})
cart.clear()
  showModal.value = true
  name.value = ''
  phone.value = ''
  address.value = ''

  

}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-window {
  background: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.modal-window h3 {
  margin-bottom: 10px;
}

.modal-window p {
  margin-bottom: 20px;
}

.modal-window button {
  background-color: #2a7a2f;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
}
.cart-page {
  background-color: rgba(255, 255, 255, 0.85);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
}
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-window {
  background: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  max-width: 350px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.modal-window button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #2a7a2f;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.cart-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}

.cart-item {
  display: flex;
  gap: 15px;
  background: white;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  align-items: center;
}

.cart-item img {
  width: 100px;
  height: auto;
  border-radius: 4px;
}

.info h4 {
  margin: 0;
}

.info p {
  font-weight: bold;
}

.total {
  font-size: 18px;
  margin-bottom: 20px;
}

.order-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: white;
  padding: 20px;
  border-radius: 8px;
}

.order-form input,
.order-form textarea {
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.order-form button {
  background-color: #2a7a2f;
  color: white;
  border: none;
  padding: 12px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
