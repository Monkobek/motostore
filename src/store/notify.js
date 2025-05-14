import { reactive } from 'vue'

export const notify = reactive({
  visible: false,
  message: '',

  show(msg) {
    this.message = msg
    this.visible = true

    setTimeout(() => {
      this.visible = false
      this.message = ''
    }, 2000)
  }
})
