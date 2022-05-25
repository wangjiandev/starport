<script setup lang="ts">
import { TheImageProxy } from '../composables/image'

const mode = ref(true)
const toggle = useToggle(mode)
</script>

<template>
  <div>
    <div>
      <router-link to="/foo" class="btn m-3 text-sm">
        foo
      </router-link>
      <router-link to="/bar" class="btn m-3 text-sm">
        bar
      </router-link>
      <button btn @click="toggle()">
        toggle
      </button>
    </div>
    <TheImageProxy :class="mode ? 'w-50 h-50' : 'w-60 h-20'" rounded-xl />
  </div>
</template>
