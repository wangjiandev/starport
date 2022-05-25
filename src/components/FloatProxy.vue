<script setup lang="ts">
import { metadata } from '~/composables/floating'

const props = defineProps<{
  modelValue?: boolean
}>()

const attrs = useAttrs()

metadata.props = props
metadata.attrs = attrs
</script>

<template>
  <slot />
</template>

<style lang="scss" scoped></style>

