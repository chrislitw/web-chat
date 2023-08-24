import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useWebsocketStore = defineStore('websocket', () => {
  console.log(import.meta.env.VITE_WEBSOCKET_URL)

  const WEBSOCKET_URL = import.meta.env.VITE_WEBSOCKET_URL

  const ws = new WebSocket(WEBSOCKET_URL)
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
    // console.log('onmessage', e.data)
    const data = JSON.parse(e.data)

    messages.value.push(data)
  }

  const sendmessageAction = (data: any) => {
    ws.send(JSON.stringify(data))
  }

  return { messages, sendmessageAction }
})
