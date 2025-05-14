import { reactive } from 'vue'

let storedUsers = []
try {
  const raw = localStorage.getItem('users')
  storedUsers = raw ? JSON.parse(raw) : []
} catch (e) {
  storedUsers = []
}

export const users = reactive(storedUsers)
import { watch } from 'vue'

watch(
  () => users.map(u => ({ username: u.username, password: u.password })),
  (newList) => {
    localStorage.setItem('users', JSON.stringify(newList))
  },
  { deep: true }
)