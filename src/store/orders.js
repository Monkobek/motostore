import { reactive } from 'vue'

export const orders = reactive({
  list: [],

  add(order) {
    this.list.push(order)
  },

  clear() {
    this.list = []
  }
})
