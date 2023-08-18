import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useWebsocketStore = defineStore('websocket', () => {
  const URL = import.meta.env.VITE_WS_URL

  const ws = new WebSocket(URL)
  const messages = ref<string[]>([])

  ws.onopen = () => {
    _openAction()
  }

  ws.onclose = () => {
    _closeAction()
  }

  ws.onmessage = (e) => {
    _onmessageAction(e)
  }

  const _openAction = () => {
    console.log('open connection')
  }

  const _closeAction = () => {
    console.log('close connection')
  }

  const _onmessageAction = (e: MessageEvent) => {
    console.log('onmessage', e.data)
    messages.value.push(e.data)
  }

  const sendmessageAction = (data: any) => {
    ws.send(JSON.stringify(data))
  }

  return { messages, sendmessageAction }
})
