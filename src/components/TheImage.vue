<script setup lang="ts">
const show = $ref(true)
</script>

<template>
  <div overflow-hidden transition-all @click="show = !show">
    <img v-if="show" block src="https://images.unsplash.com/photo-1653256471013-8613f0bf3b9b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364" alt="" srcset="">
    <img v-if="!show" block src="https://images.unsplash.com/photo-1652987879861-5ad7b005dd04?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987" alt="" srcset="">
  </div>
</template>
