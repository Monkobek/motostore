import { ref, watch } from 'vue'
import { users } from './users.js'

export const isAuthenticated = ref(false)
export const currentUser = ref(null)

// При загрузке читаем localStorage
const savedUser = localStorage.getItem('user')
if (savedUser) {
  isAuthenticated.value = true
  currentUser.value = savedUser
}

export function login(username, password) {
  const found = users.find(user => user.username === username && user.password === password)
  if (found) {
    isAuthenticated.value = true
    currentUser.value = found.username
    localStorage.setItem('user', found.username) // ✅ сохраняем
    return true
  }
  return false
}

export function logout() {
  isAuthenticated.value = false
  currentUser.value = null
  localStorage.removeItem('user') // ✅ очищаем
}

export function register(username, password) {
  const exists = users.some(user => user.username === username)
  if (exists) return false
  users.push({ username, password })
  return login(username, password)
}