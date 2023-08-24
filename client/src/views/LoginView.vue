<script setup lang="ts">
import IconGoogle from '@/components/icons/IconGoogle.vue'
import { useFirebaseStore } from '@/stores/firebase'
const firebaseStore = useFirebaseStore()
</script>
<template>
  <div class="flex h-screen w-screen items-center justify-center bg-zinc-200 px-5">
    <div class="w-80 max-w-sm rounded-md border-zinc-400 bg-white p-5 shadow-lg">
      <div class="flex flex-col gap-5">
        <div class="w-full">
          <button
            class="round flex h-12 w-full items-center justify-center gap-3 rounded border bg-white hover:border-sky-400 hover:text-sky-400 active:border-2"
            @click="firebaseStore.signInWithGoogle"
          >
            <div class="h-8 w-8"><IconGoogle class="h-full w-full object-cover" /></div>
            Google
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
