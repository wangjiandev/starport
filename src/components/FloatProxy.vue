<script setup lang="ts">
import { metadata, proxyEl } from '~/composables/floating'
const attrs = useAttrs()
metadata.attrs = attrs

const el = ref<HTMLElement>()

onMounted(() => {
  proxyEl.value = el.value
})
</script>

<template>
  <div ref="el" class="bg-gray-400/10">
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>

