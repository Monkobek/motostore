<template>
  <header class="site-header">
    <div class="logo">🏍️ МотоМагазин</div>
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/catalog">Каталог</router-link>
      <router-link to="/cart">Корзина</router-link>
      <router-link to="/orders">Заказы</router-link>
    </nav>
    <div class="auth-block">
      <button v-if="!isAuthenticated" @click="showModal = true">Войти</button>
      <div v-else>
        👋 {{ currentUser }}
        <button @click="logout">Выйти</button>
      </div>
    </div>

    <!-- Модалка -->
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="modal-box">
        <div class="tabs">
          <button :class="{ active: isLogin }" @click="isLogin = true">Вход</button>
          <button :class="{ active: !isLogin }" @click="isLogin = false">Регистрация</button>
        </div>

        <input v-model="username" placeholder="Имя пользователя" />
        <input v-model="password" type="password" placeholder="Пароль" />

        <button v-if="isLogin" @click="handleLogin">Войти</button>
        <button v-else @click="handleRegister">Зарегистрироваться</button>

        <p v-if="error" class="error">{{ error }}</p>
        <button class="close-btn" @click="showModal = false">Закрыть</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { isAuthenticated, currentUser, login, logout, register } from '../store/auth.js'

const showModal = ref(false)
const isLogin = ref(true)
const username = ref('')
const password = ref('')
const error = ref('')

function handleLogin() {
  if (login(username.value, password.value)) {
    showModal.value = false
    clear()
  } else {
    error.value = '❌ Неверный логин или пароль'
  }
}

function handleRegister() {
  if (username.value.trim().length < 3 || password.value.length < 3) {
    error.value = '⚠️ Минимум 3 символа в имени и пароле'
    return
  }

  const success = register(username.value.trim(), password.value)
  if (success) {
    showModal.value = false
    clear()
  } else {
    error.value = '⚠️ Пользователь с таким именем уже существует'
  }
}

function clear() {
  username.value = ''
  password.value = ''
  error.value = ''
}
</script>

<style scoped>
.site-header {
  background-color: #222;
  color: white;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.logo {
  font-weight: bold;
  font-size: 20px;
}

nav {
  display: flex;
  gap: 15px;
}

nav a {
  color: white;
  text-decoration: none;
}

.auth-block {
  display: flex;
  align-items: center;
  gap: 10px;
}

.auth-block button {
  background-color: #e63946;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}

.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-box {
  background: white;
  padding: 25px;
  border-radius: 8px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
}

.modal-box input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.modal-box button {
  padding: 10px;
  background-color: #2a7a2f;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.close-btn {
  background-color: gray;
}

.error {
  color: red;
  font-size: 14px;
}

.tabs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.tabs button {
  flex: 1;
  padding: 8px;
  border: none;
  cursor: pointer;
  background: #ddd;
  font-weight: bold;
}

.tabs .active {
  background: #2a7a2f;
  color: white;
}
</style>